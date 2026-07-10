const express = require('express');
const router = express.Router();
const Space = require('../models/Space');

// Get all spaces
router.get('/', async (req, res) => {
  try {
    const spaces = await Space.find();
    res.json(spaces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new space
router.post('/', async (req, res) => {
  const space = new Space({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newSpace = await space.save();
    res.status(201).json(newSpace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
