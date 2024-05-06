import React from 'react';
import axios from 'axios'; // Importing axios for making HTTP requests
import { useHistory } from 'react-router-dom'; // Import useHistory hook from react-router-dom
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import * as Yup from 'yup'; // Import Yup for form validation
import { useUser } from '../Context/UserContext'; // Import useUser hook from UserContext

// Import Jobly API
import JoblyApi from '../api.js';
import './RegistrationForm.css'; // Import CSS styles for the component

// Define the RegistrationForm component
function RegistrationForm() {

  // Define initial form values
  const initialValues = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  }

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
  })

  const { setUser } = useUser(); // Access setUser function from UserContext

  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Make API call to backend to register user
      const token = await JoblyApi.register(values);
      console.log('Registration successful, token:', token);
      // Set user data in context
      setUser({ username: values.username });
    } catch (error) {
      // Handle registration errors
      console.error('Registration error', error.response || error);
      // Set form error if API returns a message
      if (error.response && error.response.data.message) {
        setErrors({ general: error.response.data.message });
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Render the RegistrationForm component
  return (
    <div className="registration-form">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor='username'>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />

            <label htmlFor='password'>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />

            <label htmlFor='firstName'>First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error-message" />

            <label htmlFor='lastName'>Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error-message" />

            <label htmlFor='email'>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />

            <button type='submit' disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationForm; // Export the RegistrationForm component
