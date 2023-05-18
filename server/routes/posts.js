const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

// Define routes for posts

// GET /posts
router.get('/', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

// GET /posts/:id
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    // Fetch a specific post by ID from the database
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve post' });
  }
});

// POST /posts
router.post('/', async (req, res) => {
  try {
    // Create a new post based on the request body
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// PUT /posts/:id
router.put('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    // Update a specific post by ID with the request body
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// DELETE /posts/:id
router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    // Delete a specific post by ID
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Export the router
module.exports = router;
