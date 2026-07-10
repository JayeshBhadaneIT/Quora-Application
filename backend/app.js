const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import Routes
const questionRoutes = require('./routes/questions');
const postRoutes = require('./routes/posts');
const spaceRoutes = require('./routes/spaces');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/questions', questionRoutes);
app.use('/posts', postRoutes);
app.use('/spaces', spaceRoutes);

// Default Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/quoraApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
