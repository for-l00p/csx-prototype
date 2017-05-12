### Parameters as Storage

In writing factorial, you may have used a global variable similar to the stopAt10 example with counter. This is a perfectly valid way of approaching a base case. However, what if we didn’t want to use any global variables so we don’t pollute the global namespace?

It turns out that parameters in recursion make great storage variables! Since our recursive calls always carry parameters as variables for the next execution context, we can transmit new information to our next call.

Let’s see how that looks with a factorial function where we build up a product parameter (with a default value of 1) that we eventually return:
```
function factorial(num, product = 1) {
  if (num === 0) return product;
  const nextProduct = product * num;
  const nextNum = num - 1;
  return factorial(nextNum, nextProduct);
}
```
Notice that we approach our base case where num is 0 by subtracting 1 from num on every recursive call, and we increase our product by multiplying it with num on every call. Thus, we simultaneously build our answer and approach our base case using parameters!

If we strip away the nextProduct and nextNum variable assignments and insert those values directly as arguments for the next call, the code becomes even more elegant:
```
function factorial(num, product = 1) {
  if (num === 0) return product;
  return factorial(num - 1, product * num);
}
```
Remember to return your recursive call so that the product can be returned to the outermost function!

Finally, if we apply ES6 arrow functions and a ternary operator, we get the most elegant form of them all: the one-liner!
```
const factorial = (num, product = 1) => num === 0 ? product : factorial(num - 1, product * num);
```
While this may not be the most readable way to write the factorial function, it sure is cool to see it boiled down to just one short line of code!