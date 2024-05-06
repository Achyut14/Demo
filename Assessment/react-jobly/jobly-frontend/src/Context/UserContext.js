import React, { createContext, useContext, useState, useEffect } from "react";
import JoblyApi from "../api"; // Importing the JoblyApi module

// Create a UserContext
const UserContext = createContext();

// Custom hook to consume the UserContext
export const useUser = () => useContext(UserContext);

// UserProvider component to provide user data and authentication status to its children
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to store user data

    // Check if user is logged in based on the presence of the user object
    const isLoggedIn = Boolean(user);

    // Fetch user data from API when component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                JoblyApi.token = storedToken; // Set the token for future API requests
                try {
                    const userData = await JoblyApi.getCurrentUser();
                    setUser(userData); // Set user data in context
                } catch (error) {
                    console.log("Could not fetch user data:", error);
                }
            }
        };
        fetchUserData();
    }, []); // Empty dependency array to run effect only once when component mounts

    // Provide user data and authentication status to children components
    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
