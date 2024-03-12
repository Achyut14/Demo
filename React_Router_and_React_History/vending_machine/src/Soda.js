import React from 'react';
import { Link } from 'react-router-dom';


function Soda() {
    return (
        <div className="soda-container">
            <h2 className="soda-title">Soda</h2>
            <p className="soda-description">Refreshing fizzy drink!</p>
            <Link to="/" className="soda-back-link">Go Back</Link>
        </div>
    );
}

export default Soda;
