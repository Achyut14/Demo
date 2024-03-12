import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'; 

function VendingMachine() {
    return (
        <div className="vending-machine-container">
            <h1>Welcome to the Vending Machine!</h1>
            <h3>Select a Snack</h3>
            <ul className="vending-machine-list">
                <li><Link to="/soda">Soda</Link></li>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/candy">Candy</Link></li>
            </ul>
        </div>
    );
}

export default VendingMachine;
