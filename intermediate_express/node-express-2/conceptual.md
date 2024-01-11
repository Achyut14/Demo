### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  ANS: JWT is Json web token which is often used fot logging into website safely.

- What is the signature portion of the JWT?  What does it do?
  ANS: the signature in JWT gurantees the authenticity and intergrity of the token, ensuring that the sender is legitimate and the token data hasn't been changed.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  ANS: Yes, anyone who intercepts the token can decode the payload and read its contents.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  ANS: JwT authentication involves a server verifying a user's credential and issuing a token, which user then sends back with each request to access protected resources, allowing the server to verify their identity and permission without needing to maintain a session state. This process ensures secure and efficient user authentication and authorization in web application.-

- Compare and contrast unit, integration and end-to-end tests.
  ANS: Unit test check individual components, integration tests examine how those componets work together, and end-to-end tests evaluate the entire application's flow from a user's perspective, each increasing in complexity and scope from unit to integration to end-to-end.

- What is a mock? What are some things you would mock?
  ANS: A mock is a fake object used in testing to lmitate a real one, often used to simulate complex systems like database or APIs, allowing developers to test code independently of external dependencies.

- What is continuous integration?
  ANS: COntinuous Intergration is a methood in software development where code changes are regularly combained and tested automatically, making it easier to find and fix problems quickly.

- What is an environment variable and what are they used for?
  ANS: AN environment variable is a setting on a computer that helps program know where to find certain information, like where to save files or how to connect to the internet, without changing the programs code.

- What is TDD? What are some benefits and drawbacks?
  ANS: TDD is when developers write the tests for new features before they actually write the code to make the feature works. The benefits include better code quality and easier changes later on, but it can take more time and effort to write the test first.

- What is the value of using JSONSchema for validation?
  ANS: Using JSONSchema for validation provides a standardized way to define the structure and format of JSON data. It ensures that the data received or sent (like in APIs or configurations) matches expected patterns, improving data integrity and reducing errors.

- What are some ways to decide which code to test?
  ANS: To decide which code to test, focus on the most important parts like new features, area where problems often happenm and sections that handle key tasks or user information.

- What does `RETURNING` do in SQL? When would you use it?
  ANS: The `RETURNING` clause in SQL is used to immediately get information about the rows you just added, changed, or removed in database, saving you from having to do an extra search to find this information.

- What are some differences between Web Sockets and HTTP?
  ANS: Web Sockets keep a connection open, good for chat apps or games where you need quick, back-and-forth updates. HTTP is more like asking and answering one question at a time, used for regular web browsing.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  ANS: I would prefer using Flask over Express, for me i found Flask less confusing than Express, Express has more files and really confusing so I perfer flask.
