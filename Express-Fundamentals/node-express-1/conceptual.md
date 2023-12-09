### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  ANS: Promises, async/await and callbacks are the some ways of managing asynchronous code in JavaScript.

- What is a Promise?
  ANS: IT allows you to attach to callback to handle the success value or the reason for failure, enabling more manageable asynchronous code without failling into the callback/

- What are the differences between an async function and a regular function?
  ANS: async return a promise and allow the use of the await keyword to pause execution until the promise resolves. Regular function do not support this syntax, often leading to more complez patterns like callback or promise chains for managing asynchronous behavior.

- What is the difference between Node.js and Express.js?
  ANS: Node.js is the environment that lets you use JavaScript on a server, and Express.js is a helper that makes it easier to build your website using Node.js

- What is the error-first callback pattern?
  ANS: The error-first callback pattern is a standard where callbacks have the error as their first parameter and any successful response data as subsequent parameters, ensuring that error handling is consistently addressed in asynchronouse functions. 

- What is middleware?
  ANS: Middleware is a function in web applications that intercepts and processes incoming requests and outgoing responses, often used for task like authentication, logging, or data manipulation, before passing control to the text function in the cycle.

- What does the `next` function do?
  ANS: The 'next' function in middleware is used to pass control to the next middleware funtion in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
ANS: 'await' calls for fetching user data. Each 'awaut pauses the execution of 'getUsers()' until current request completes, meaning the requests are made one after the other, not simultaneously, there is no error handling, the returned array is `[elie, matt, joel]`, but the request are made in the order 'elie', 'joel', 'matt' the inconsitency might be confusing and could lead to errors in the consuming code.
