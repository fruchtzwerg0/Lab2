const express = require('express');
const app = express();

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000; // Use the provided port or 3000 as a default
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
