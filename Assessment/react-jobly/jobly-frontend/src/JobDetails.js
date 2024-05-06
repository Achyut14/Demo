import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoblyApi from './api'; // Importing the JoblyApi module
import './JobDetails.css'

// Define the JobDetails component
function JobDetails() {
    const [jobs, setJobs] = useState([]); // State to store list of jobs
    const [searchTerm, setSearchTerm] = useState(''); // State to store search term
    const { handle } = useParams(); // Extracting company handle from URL params
    const navigate = useNavigate(); // Accessing the navigate function from react-router-dom

    // Function to fetch jobs based on search term
    const fetchedJobs = async () => {
        try {
            const fetchedJobs = await JoblyApi.getJobs(searchTerm);
            setJobs(fetchedJobs); // Update jobs state with fetched data
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        }
    };

    // Fetch jobs when component mounts or search term changes
    useEffect(() => {
        fetchedJobs();
    }, [searchTerm]);

    // Function to handle change in search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle form submission for search
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchedJobs();
    };

    // Render the JobDetails component
    return (
        <div className="job-details-container">
            <h1>Jobs</h1>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search Jobs..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {jobs.length > 0 ? (
                <ul>
                    {/* Map over jobs and render each job */}
                    {jobs.map((job) => (
                        <li key={job.id} className="job-item">
                            <div className="job-info">
                                <h2>{job.title}</h2>
                                <p>{job.companyName}</p>
                                <p>Salary: {job.salary}</p>
                                <p>Equity: {job.equity}</p>
                            </div>
                            {/* Add a button to navigate to the job application page */}
                            <button className="apply-button" onClick={() => navigate(`/apply/${job.id}`)}>Apply</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Jobs Not Found. Please try again. :(</p>
            )}
        </div>
    );
}

export default JobDetails; // Export the JobDetails component
