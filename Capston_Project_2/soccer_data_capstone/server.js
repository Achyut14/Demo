require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes and origins
app.use(cors());

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

// Enable JSON body parsing
app.use(express.json());

// Proxy endpoint
app.get('/matches', async (req, res) => {
  const {date} = req.query
    try {
        const response = await axios.get(`${API_URL}/matches` + (date ? `?date=${date}` : ""),{
            headers: {
                'X-Auth-Token': API_TOKEN
            }
        });
        console.log(response.data)
        console.log(response.data.matches[0].date)
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
