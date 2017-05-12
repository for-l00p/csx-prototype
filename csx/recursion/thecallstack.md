### The Call Stack

Every computer contains a particular area of memory set aside for function calls. This space, known as the call stack, creates a new execution context for a function’s arguments, local variables and operations every time you call a function.

Each new execution context exists on one frame on the call stack. When a function makes a recursive call (that is, a call to itself), a new execution context enters on TOP of the previous one, adding a frame to the call stack.

We can visualize this with a stack of pancakes, where each pancake is a frame:

![Pumpkin Spice Pancakes](https://upload.wikimedia.org/wikipedia/commons/c/c9/PumpkinSpicePancakes.jpg)

Well that looks yummy… How high can the stack go? It depends on the specific Javascript environment (Chrome, Firefox, Node.js, etc.) and is typically set arbitrarily around 10,000. So if you plan to recurse more than 10,000 layers deep, beware that you may see the infamous “Maximum call stack size exceeded” stack overflow message even without an infinite loop!