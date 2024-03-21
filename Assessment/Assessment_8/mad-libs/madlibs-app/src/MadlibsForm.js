import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(formData).every(value => value.trim())) {
      alert('Please fill out all fields.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}: </label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={`Enter a ${key}`}
          />
        </div>
      ))}
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
