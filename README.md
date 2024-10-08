# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Runtime complexity of the conversion here is O(n^2). We have two nested for loops where the first for loop runs through all the rows and the second runs through all the columnns. Both of these iterate n times which is the number of vertices, this gives us n*n or n^2. The runtime is only impacted by the number of vertices, as the number of of edges will not matter as it will still check the number of vertices regardless. 


Sources: 

https://www.geeksforgeeks.org/adjacency-matrix/ - explained more on matrixes

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."


