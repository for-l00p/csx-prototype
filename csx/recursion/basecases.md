### Using Recursion Responsibly: Base Cases

If we need to end our recursive calls at some point, how do we do that? With base cases!
A base case is a conditional statement that contains a return statement. Assuming we return anything other than another function call, our return statement saves the day and actually stops the recursion! The frames start to pop off one by one until the call stack is empty. We’re saved from the claws of infinite loops!
For example, this stack stops growing after the 10th recursive call:
let counter = 0;
```
function stopAt10() {
  if (counter === 10) return 'We counted to ten!';
  counter++;
  return stopAt10();
}

stopAt10();
console.log(counter);
```

Here is exactly what happens:
* We declare a global counter variable then assign it a value of 0.
* We define a function called stopAt10 then store that definition in global memory.
* We invoke stopAt10, which creates our first frame on the call stack.
* We enter that frame’s execution context.
* We see that counter does not equal 10, so we do not enter the base case.
* We increment the counter by 1.
* We make a recursive call, which creates our second frame on the call stack.
* We enter the second frame’s execution context.
* Counter is 1, not 10, so we do not enter the base case.
* We increment the counter by 1.
* We make another recursive call, which creates our third frame on the call stack.
* …repeat until the step when counter increments to 10
* We make a recursive call, which creates our 11th frame on the call stack.
* We enter the 11th frame’s execution context.
* Since counter does equal 10, we enter the base case and return our string!
* Everything now rewinds because we hit return. The 11th frame pops off the call stack * and sends its returned value to the 10th frame’s return statement.
* The 10th frame pops off the call stack and sends its returned value to the 9th frame.
* … repeat until we arrive at our first frame.
* The first frame pops off the call stack and sends its returned value to the global execution context where we originally called stopAt10!
* Our console log will show that counter is 10.
* That’s a lot happening in the computer just to count to 10!
