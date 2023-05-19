const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const auth = require("../middleware/auth");

// Define routes for users

// GET /users
router.get('/',auth, async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// GET /users/:id
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    // Fetch a specific user by ID from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// POST /users
router.post('/', async (req, res) => {
  try {
    // Create a new user based on the request body
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// PUT /users/:id
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    // Update a specific user by ID with the request body
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// DELETE /users/:id
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    // Delete a specific user by ID
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Export the router
module.exports = router;
