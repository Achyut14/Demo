### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  ANS: Its a library for handling navigation and routing in React application, enabling dynamic and components-based routing that integrates with the React component model. It facilitates the synchronization of the UI with the URL, support nested and lazy-loaded routes, and manages route parameters and state for more interactive single-page applications.

- What is a single page application?
  ANS: is a web application that loads a single HTML page and dynamically updates that page as the user interacts with app.

- What are some differences between client side and server side routing?
  ANS: Client-side routing handles navigation within the browser without requesting new wbe pages from the server, offering smoother transitions and quicker interactions. In contrast, server-side routing involves the server in delivering new pages to the browser, resulting in full page refreshes but can offer better SEO and initial page load performance.

- What are two ways of handling redirects with React Router? When would you use each?
  ANS: Use the `<Redirect?>` component for declarative redirection with JSX, and the `useHistory` hooks to push or replace method for programmatic navigation in response to user actions or events in React Router.

- What are two different ways to handle page-not-found user experiences using React Router? 
  ANS: You can handle page-not-found experiences in React Router by using a `<Route>` with a catch-all path, dusplaying a custom "Not Found component, or employing a `<Switch>` component that renders a "Not Found" component as the last route.

- How do you grab URL parameters from within a component using React Router?
  ANS: By using the `userParams` hook. This hook allows you to access the params of the current `<Route>` that was matched

- What is context in React? When would you use it?
  ANS: Context in React provides a way to share values like users data or theme settings across all components in an app without having to pass props down throught the components tree.

- Describe some differences between class-based components and function
  components in React.
  ANS: Class-based components in React offer lifecycle methods and state management, while function components, now equipped with hooks, provide a simpler syntax and similar capabilities, leading to a preference for functional components due to their conciseness and ease of use

- What are some of the problems that hooks were designed to solve?
  ANS: Hooks in React solve the reuse of stateful logic, simplify functional components by enabling them to use state, and eliminate confusion around this in classes.






