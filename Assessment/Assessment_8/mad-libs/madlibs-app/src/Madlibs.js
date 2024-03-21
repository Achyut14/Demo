import React, { useState } from 'react';
import MadlibForm from './MadlibsForm';
import Story from './Story';
import "./Madlib.css";


function Madlib() {
    const [storyData, setStoryData] = useState(null);
    const [isStoryVisible, setIsStoryVisible] = useState(false);

    const handleCreateStory = (newStoryData) => {
        setStoryData(newStoryData);
        setIsStoryVisible(true);
    };

    const handleRestart = () => {
        setStoryData(null);
        setIsStoryVisible(false);
    };

    return (
        <div className="Madlib">
            <h1>Madlibs!</h1>
            {isStoryVisible ? (
                <Story storyData={storyData} onRestart={handleRestart} />
            ) : (
                <MadlibForm onSubmit={handleCreateStory} />
            )}
        </div>
    );
}

export default Madlib;
