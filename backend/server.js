const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow requests from frontend

// API endpoint to fetch GitHub users
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users');//git the data present in this api to localhost:5000/api/users
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
