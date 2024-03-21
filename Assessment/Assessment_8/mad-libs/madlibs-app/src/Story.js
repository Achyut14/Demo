import React from 'react';

function Story({ storyData, onRestart }) {
  return (
    <div>
      <p>
        In a {storyData.adjective} {storyData.place}, there was a {storyData.noun} that could {storyData.verb} {storyData.adverb}.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Story;
