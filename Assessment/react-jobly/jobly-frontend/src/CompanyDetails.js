import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from './api'; // Importing the JoblyApi module


// Define the CompanyDetails component
function CompanyDetails({ name }) {
    const [companies, setCompanies] = useState([]); // State to store list of companies
    const [searchTerm, setSearchTerm] = useState(''); // State to store search term

    // Function to fetch companies based on search term
    const fetchedCompanies = async () => {
        try {
            const fetchedCompanies = await JoblyApi.getCompanies(searchTerm);
            if (Array.isArray(fetchedCompanies)) {
                setCompanies(fetchedCompanies); // Update companies state with fetched data
            } else {
                console.error('Expected fetchedCompanies to be an array but got:', typeof fetchedCompanies);
            }
        } catch (error) {
            console.error('Failed to fetch companies:', error);
        }
    };

    // Fetch companies when component mounts or search term changes
    useEffect(() => {
        fetchedCompanies();
    }, [searchTerm]);

    // Function to handle change in search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle form submission for search
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchedCompanies();
    };

    // Render the CompanyDetails component
    return (
        <div className="company-details-container">
            <h1>Companies</h1>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search Companies..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {companies.length > 0 ? (
                <ul>
                    {/* Map over companies and render each company */}
                    {companies.map((company) => (
                        <li key={company.handle} className="company-item">
                            {/* Link to the company details page */}
                            <Link to={`/company/${company.handle}`}>{company.name}</Link>
                            <p>{company.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Companies Not Found. Please try again. :(</p>
            )}
        </div>
    );
}

export default CompanyDetails; // Export the CompanyDetails component
