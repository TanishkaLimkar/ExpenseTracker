// Load environment variables from a .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const cors = require('cors');
const connectDb = require('./db/db'); // Adjust the path to match your actual structure
const {readdirSync} = require('fs');
const app = express();

// Get the port from the environment variable or use a default value (e.g., 8080)
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1', require('./routes/'+route)))

// Start the server
connectDb().then(()=> {
    app.listen(PORT, () => {
        console.log('Server is listening on port:', PORT);
    });
})

