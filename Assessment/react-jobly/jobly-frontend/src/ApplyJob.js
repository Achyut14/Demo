import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoblyApi from './api'; // Importing the JoblyApi module
import './ApplyJob.css'; // Importing CSS styles for the component

const ApplyJob = () => {
    const { jobId } = useParams(); // Extracting jobId from URL params
    const navigate = useNavigate(); // Accessing the navigate function from react-router-dom
    const [job, setJob] = useState(null); // State to store job details

    // Fetch job details when component mounts or jobId changes
    useEffect(() => {
        const fetchJob = async () => {
            try {
                // Fetch job details from the API using jobId
                const jobData = await JoblyApi.getJobDetails(jobId);
                setJob(jobData); // Update job state with fetched data
            } catch (error) {
                console.error('Failed to fetch job details:', error);
            }
        };
        fetchJob();
    }, [jobId]); // Dependency array to re-run effect when jobId changes

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        alert('Application Submitted!'); // Display a simple alert
        navigate(-1); // Navigate back to the previous page
    };

    // Render loading message if job details are not yet fetched
    if (!job) return <div>Loading job details...</div>;

    // Render the Apply Job form
    return (
        <div className="apply-job-container">
            <h1>Apply for Job: {job.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Resume (URL):
                    <input type="text" name="resume" required />
                </label>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyJob;
