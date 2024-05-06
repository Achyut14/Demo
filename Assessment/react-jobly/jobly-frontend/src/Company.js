import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoblyApi from './api'; // Importing the JoblyApi module
import './Company.css'

// Define the Company component
function Company() {
    const { handle } = useParams(); // Extracting company handle from URL params
    const [company, setCompany] = useState(null); // State to store company details
    const navigate = useNavigate(); // Accessing the navigate function from react-router-dom

    // Fetch company details when component mounts or handle changes
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                // Fetch company details from the API using the handle
                const companyData = await JoblyApi.getCompany(handle);
                setCompany(companyData); // Update company state with fetched data
            } catch (error) {
                console.error('Failed to fetch company details:', error);
            }
        };
        fetchCompany();
    }, [handle]); // Dependency array to re-run effect when handle changes

    // Render loading message if company details are not yet fetched
    if (!company) return <div>Loading...</div>;

    // Render the Company details
    return (
        <div className="company-container">
            <h1>{company.name}</h1>
            <h3>{company.description}</h3>
            <h2>Open Positions</h2>
            <ul>
                {/* Map over company jobs and render each job */}
                {company.jobs && company.jobs.map(job => (
                    <li key={job.id} className="job-item">
                        <div className="job-info">
                            <h3>{job.title}</h3>
                            <p>Salary: {job.salary}</p>
                            <p>Equity: {job.equity}</p>
                        </div>
                        {/* Add a button to navigate to the job application page */}
                        <button onClick={() => navigate(`/apply/${job.id}`)}>Apply</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Company; // Export the Company component
