##  To Iterate of Not to Iterate

Since recursion has so much overhead, we often prefer to use iterative loops for simple operations like counting. Compare our stopAt10 recursive function we used above to the while loop below:
```
let counter = 0;

while (counter !== 10) {
  counter++;
}

console.log(counter);
```
* Here is exactly what happens:
* We declare a global counter variable then assign it a value of 0.
* We see that counter is not equal to 10, so we enter the while loop.
* We increment the counter to 1.
* We see that counter is still not equal to 10, so we enter the while loop again.
* We increment the counter to 2.
* … repeat until counter increments to 10.
* Counter is 10, so the condition evaluates to false and we exit the while loop.
* Our console log will show that counter is 10.
* Notice how many fewer steps there are! No additional frames on the call stack required. This makes iteration faster than recursion almost 100% of the time in Javascript. Iteration is also safer and provides more flexibility; I could iteratively loop to 100,000 just fine, whereas the recursive solution would break around 10,000 as it exceeds the maximum call stack size.
* Performance issues aside, a key takeaway here is that recursion is remarkably similar to a while loop! The code block continues running based on some condition.
* Do note a minor difference in their conditional expressions, though: recursion stops when a base case evaluates to true, whereas a while loop stops when its condition evaluates to false.