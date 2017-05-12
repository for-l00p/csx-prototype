### Challenge 4

Write a function called recurseFuncs that takes an array of functions and a number. Our function recurseFuncs should call the input functions in order with that number, where the result of each function becomes the next function’s input. Use recursion to return the final value after all functions have been used.
For example:
```
const funcs = [
    (a) => 8 * a - 10,
    (a) => (a - 3) * (a - 3) * (a - 3),
    (a) => a + 4,
    (a) => a % 5
 ];

recurseFuncs(2, funcs); // → 1
```
As we can see, the first function is called with an input of 2 and returns an output of 6. Then 6 passes into the second function to return 27. Then 27 passes into the third function to return 31. Then 31 passes into the last function to return 1. Since we have used all functions, we return 1 from recurseFuncs.
````
// Inputs: {Integer} - input
//         {Array} - funcArray
// Output: {Integer}

function recurseFuncs(input, funcArray) {

}
```
