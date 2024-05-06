import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './Context/UserContext'; // Importing the useUser hook from the UserContext
import './Home.css'

// Define the Home component
function Home() {
  const { user } = useUser(); // Accessing the user object from the UserContext

  return (
    <div className="home-container">
      <h1>Welcome to React Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      {/* Conditionally render login/signup buttons if user is not logged in */}
      {!user ? (
        <div className="home-actions">
          <Link to="/login"><button className="home-button">Log in</button></Link>
          <Link to="/signup"><button className="home-button">Sign up</button></Link>
        </div>
      ) : (
        // Render welcome message if user is logged in
        <h2>Welcome back, {user.username}!</h2>
      )}
    </div>
  );
}

export default Home; // Export the Home component
