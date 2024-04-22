// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();
const port = 3000; // Set the port for the server

// Define some sample data
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Define a route to get all users
app.get("/", (req, res) => {
  res.json(users); // Return the users array as JSON
});

// Define a route to get a specific user by ID
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID parameter from the URL
  const user = users.find((user) => user.id === id); // Find the user with the specified ID
  if (!user) {
    res.status(404).json({ error: "User not found" }); // Return a 404 error if user is not found
  } else {
    res.json(user); // Return the user as JSON
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
