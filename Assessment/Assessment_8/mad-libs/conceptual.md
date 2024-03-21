### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  ANS: React is a JavaScript libraru for building user interfaces, primarily used for single-page applications. IT allows developers to create web applications that can update dynamically, offering a responsive and efficient user experence.

- What is Babel?
  ANS: Babel is a tool for transforming ECMAScript 2015+ code into backward-compatible JavaScript to run in older browsers.

- What is JSX?
  ANS: JSX is a syntax extension for JavaScript, used with React, that allows developers to write HTML structures in the same file as JavaScript code, facilitating a more convenient and readable way to create and manage UI components.

- How is a Component created in React?
  ANS: In React, a component can be created using a class by extending `React.Component` or using a function that return JSX. Class components use a `render` method, while functional components utilize hooks for state and effect.

- What are some difference between state and props?
 ANS: State is internal and mutable, used for data that changes over time within a component. Props are immutable and passed from parent to child components, used for configuring and passing data to a component. 

- What does "downward data flow" refer to in React?
  ANS: In React, "downward data flow" refers to the practice of passing data from parent components down to child components through props, ensuring a unidirectional flow of data that makes the application easier to understand and debug. This design principle helps maintain a clear structure and predictability in how data is handled across the component hierarchy.

- What is a controlled component?
  ANS: A controlled component in React has its form data managed by the state, with changes handled via functions to keep the input synchronized with the state.

- What is an uncontrolled component?
  ANS: An uncontrolled component in React is one that stores its own state internally and updates its data based on user input, without the need for React state to manage its input values directly, often using refs to access its current value.

- What is the purpose of the `key` prop when rendering a list of components?
  ANS: THe `Key` prop in React helps identify each component in a list, improving performance and consistency by allowing React to manage and reuse components efficiently, especially during updates and reordering

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  ANS: Using an array index as a `key` prop can cause issues because it doesn't uniquely identify elements, leading to problems with component updates and state management when the list changes.

- Describe useEffect.  What use cases is it used for in React components?
  ANS: "useEffect" is React hook for managing side effects in function components, useful for tasks like data fetching and subscribing to events, with control over when it runs based on dependencies.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  ANS: "useRef" stores a values across renders without causing rerenders. No, changing a ref value doesn't trigger a component rerender.

- When would you use a ref? When wouldn't you use one?
  ANS: Use a ref for direct DOM access, managing focus, or keeping track of previous values without causing rerender. Avoid refs for data that should trigger a render when changed; use state instead.

- What is a custom hook in React? When would you want to write one?
  ANS: A custom hook in React is a function that starts with `use` and can use other hooks to encapsulate reusable logic. You'd write one to share logic across multiple components or to organize comples components.
