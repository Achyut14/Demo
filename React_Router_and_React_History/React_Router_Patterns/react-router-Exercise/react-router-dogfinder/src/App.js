import React, {useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import './App.css';

function App() {
  // State to hold dog data and loading state
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
    error: null // Added to handle potential errors
  });

  useEffect(() => {
    async function loadDogs() {
      const response = await axios.get("http://localhost:5001/dogs")
      setDogs({
        data:response.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])
  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
