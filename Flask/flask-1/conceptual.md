### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
  ANS: Python is often used for web developemnt like django, flask and JavaScript is primarily used for web development on the client-side

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  ANS: We can use get() method to retreive the value associated with a key, 

- What is a unit test?
   ANS: test to verify that each uniot of code is function correctly or not.

- What is an integration test?
   ANS: Test to see that components work together, "like does this URL path map to a route function"

- What is the role of web application framework, like Flask?
   ANS: Framework like Flask offer a routing that maps URLS to specific function or views, it handle the low-level details of HTTP requests and responses.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  ANS: It depends on the requirements and design of your application, you might want to use parameter in a route URL when you need to capture dynamic values for routes and you might use URL query parameters when dealing with optional or modifiable information.

- How do you collect data from a URL placeholder parameter using Flask?
  ANS: You can collect data frim URL placeholder parameters by defining the routes with variable parts in the URL.

- How do you collect data from the query string using Flask?
  ANS:You can collect using the 'request' objects 'args' attribute.

- How do you collect data from the body of the request using Flask?
   ANS: request.json

- What is a cookie and what kinds of things are they commonly used for?
   ANS: value pair stored in the browser and send to the server with each request

- What is the session object in Flask?
   ANS: similar to cookies, like a dictionary that is stored in the browser

- What does Flask's `jsonify()` do?
   ANS: tell the browser that object in () is JSON
