import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom
import * as Yup from 'yup'; // Import Yup for form validation
import JoblyApi from '../api'; // Import JoblyApi module
import { useUser } from '../Context/UserContext'; // Import useUser hook from UserContext
import './LoginForm.css'; // Import CSS styles for the component

// Define the LoginForm component
function LoginForm({ onLogin }) {
    const initialValues = {
        username: "",
        password: ""
    };

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    const navigate = useNavigate(); // Access the navigate function from react-router-dom
    const { setUser } = useUser(); // Access setUser function from UserContext

    // Function to handle form submission
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            // Try to login user via API
            const token = await JoblyApi.login(values);
            console.log('Login successful', token);
            // Set the token for future API requests
            JoblyApi.token = token;
            // Save token/user info in localStorage
            localStorage.setItem('token', token);
            // Store user data in context
            setUser({ username: values.username });
            // Navigate to '/' after logging in
            navigate('/');
            // If a function is passed to LoginForm to handle successful login, call it
            if (onLogin) onLogin(token);
        } catch (error) {
            console.error('Login error', error.response || error);
            // Display errors if there is any issue
            let message = error.response && error.response.data ? error.response.data.error.message : "Login failed. Please try again.";
            // Set form error if the API returns an error message
            setErrors({ general: message });
        } finally {
            setSubmitting(false);
        }
    };
    
    // Render the LoginForm component
    return (
        <div className="login-form">
            <h2>Login</h2>
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

                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>      
        </div>
    );
}

export default LoginForm; // Export the LoginForm component
