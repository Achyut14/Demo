import React, { useState, useEffect } from 'react';
import './App.css'
import SearchForm from './SearchForm';
import moment from 'moment';


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate]);

  const fetchData = async (date) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/matches?date=${date}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      setMatches(data.matches);
      setFilteredMatches(data.matches);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = matches.filter(({ homeTeam, awayTeam }) =>
      homeTeam.name.toLowerCase().includes(lowerCaseQuery) ||
      awayTeam.name.toLowerCase().includes(lowerCaseQuery) ||
    (homeTeam.players?.some(player => player.name.toLowerCase().includes(lowerCaseQuery))) || // Safe navigation operator
  (awayTeam.players?.some(player => player.name.toLowerCase().includes(lowerCaseQuery))) // Safe navigation operator
);
    setFilteredMatches(filtered);
  };

  return (
    <div className='container'>
      <h1>Soccer Match Search</h1>
      <SearchForm onSearch={handleSearch} onDateChange={setSelectedDate} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {filteredMatches.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Home Team</th>
                  <th>Away Team</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>

        <tbody>
          {filteredMatches.map(({ id, homeTeam, awayTeam, utcDate }) => {
            const matchDate = moment(utcDate).format('LL');
            const matchTime = moment(utcDate).format('LT');
    
    return (
      <tr key={id}>
        <td>{homeTeam.name}</td>
        <td>{awayTeam.name}</td>
        <td>{matchDate}</td>
        <td>{matchTime}</td>
      </tr>
    );
  })}
</tbody>
            </table>
          ) : (
            <p>No matches found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
