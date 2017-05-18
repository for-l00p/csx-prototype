console.log('%cIf you found this - you should probably apply to:', 'color:red; font-size: large;');
console.log('%c⚒CODESMITH', 'color:#03A3EA; font-size: 60px; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; font-weight: 900;');

$(document).ready(function() {
  $('pre.lesson__codeblock').each(function(i, block) {
    block.code = block.innerHTML;
    console.log('block is', block, '\nblock.code is', block.code);
    hljs.highlightBlock(block);
  });
});

$('.lesson__codeblock').click((e) => {
  // syntax highlighting means the event target may not actually be the parent codeblock we want to grab
  const codeblock = findAncestor(e.target, 'lesson__codeblock');
  console.log('codeblock is', codeblock);
  // the codeblock clicked will soon no longer exist, so let's save a reference to its next sibling (the consoleBlock) to remember where it was
  const consoleBlock = codeblock.nextElementSibling;
  console.log('consoleBlock is', consoleBlock);

  let textblock;  // the interactive textarea that will hold the code previously held by the non-interactive codeblock
  let runBtn;     // the runBtn associated with the textarea

  mirror = CodeMirror(function(elt) {
    codeblock.parentNode.replaceChild(elt, codeblock);
  }, {
    value: prepareCode(codeblock.code),
    lineNumbers: true,
    mode: 'javascript',
    matchBrackets: true,
    autoCloseBrackets: true,
    // keyMap: 'sublime',
    tabSize: 2,
    // theme: 'dracula',
    lineWrapping: false,
  });

  // the Codemirror function replaces the original .lesson__codeblock element with the deeply nested .CodeMirror element. This is a somewhat clumsy way to associate the newly created mirror object (which is not a DOM element) with the new textarea element that users are typing in
  textblock = consoleBlock.previousElementSibling.firstElementChild.firstElementChild;
  textblock.mirror = mirror;
  textblock.console = consoleBlock;

  runBtn = consoleBlock.nextElementSibling;
  runBtn.textblock = textblock;
  runBtn.setAttribute('style', 'display:block');
  textblock.focus();
});

$(window).on('keydown', e => {
  if (e.ctrlKey && e.keyCode === 13) {
    execute(e.target);
  }
});

$('.lesson__runcode').click((e) => {
  execute(e.target.textblock);
});

function prepareCode(text) {
  return text.replace(/=&gt;/g, '=>');
}

function execute(target) {
  const code = target.mirror.getValue();
  target.console.innerHTML = '';
  console.nativeLog = console.log;

  console.log = function(...args) {
    print(args, target.console);
    console.nativeLog(...args);
  };

  eval(code);
  console.log = console.nativeLog;
  if (target.console.innerHTML) {
    target.console.setAttribute('style', 'display:block');
  }
}

function print(args, domConsole) {
  const text = args.join(' ') + '\n';
  domConsole.appendChild(document.createTextNode(text));
}

function findAncestor (el, cls) {
  console.log('incoming el is', el);
  console.log('and', el.classList.contains(cls));
  if (!el.classList.contains(cls)) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
  }
  console.log('outgoing el is', el);
  return el;
}
