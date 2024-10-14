const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow requests from frontend

// API endpoint to fetch GitHub users
// app.get('/api/users', async (req, res) => {
//   try {
//     const response = await axios.get('https://api.github.com/users');//git the data present in this api to localhost:5000/api/users
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users' });
//   }
// });

//alternate way for small applications
app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

//more ways for api : 1)fetch 2)node-fetch 3)https 4)got 5)axios


const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
