### On Function calls

We know that functions can perform operations on strings, numbers, arrays and objects. But what happens if we try to execute a function inside another function?

(All code blocks become interactive by clicking on them! Click "Run" to see the console.)
```
function add2(num) {
  return num + 2;
}

function add2ThenMultiplyBy3(num) {
  const value = add2(num);
  return 3 * value;
}

add2ThenMultiplyBy3(8);
```

This works and produces the expected output of 30! The reason is that a function is just another data type, and all data types can be manipulated by functions in Javascript.
So if functions can call other functions, what happens if a function tries to call itself? For example:
```
function callingMyself() {
  callingMyself();
}
```

This is recursion! Recursion occurs when a function invokes itself. In our example, however, we did not provide any other code, so callingMyself would invoke callingMyself for eternity! Clearly, we need a way to stop this infinite loop so we can recurse without breaking the computer.

The particular error code you’ll see when running infinite recursive calls is “Maximum call stack size exceeded.” So what is the call stack? And what is this “maximum” value?