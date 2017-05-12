### Recursion: What is it Good for?

Some consider recursion dangerous because of the possibility of stack overflows. Others consider it poor practice because it is not as performant as iterative solutions for simple cases. However, when algorithms get more complex, recursion offers us dynamic solutions that iterative solutions cannot.

Data structures like trees and graphs lend themselves heavily to recursive solutions. Mathematical algorithms with permutations and combinations are also solved elegantly with recursion.

Sometimes we’ll want to create new execution contexts to track variables instead of keeping all variables in one context and mutating them. This is a key paradigm that powers functional programming, which we will touch on later in this course.

Finally, when building software, tradeoffs are necessary. Recursion is one of those tools in your toolbox that should be kept at the ready, equipped to make your code more readable, elegant and powerful when need be.