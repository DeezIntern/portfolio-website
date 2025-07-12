const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  skills: [String],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    githubUrl: String,
    liveUrl: String,
    image: String
  }],
  contact: {
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    resume: String
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Routes
app.get('/api/portfolio', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      // Create default portfolio data if none exists
      const defaultPortfolio = new Portfolio({
        name: 'Your Name',
        title: 'DevOps Engineer',
        bio: 'DevOps Engineer with a passion for automation and continuous integration. Skilled in cloud technologies, containerization, and infrastructure as code.',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Git', 'Agile', 'Scrum', 'DevOps', 'Linux'],
        projects: [
          {
            title: 'Portfolio Website',
            description: 'A responsive portfolio website built with MERN stack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
            githubUrl: 'https://github.com/yourusername/portfolio',
          
            image: '/images/portfolio-preview.jpg'
          }
        ],
        contact: {
          email: 'aslesh.choudhary31@gmail.com',
          phone: '+919983017753',
          linkedin: 'https://linkedin.com/in/asleshchoudhary',
          github: 'https://github.com/aslesh1',
          resume: '/files/resume.pdf'
        }
      });
      await defaultPortfolio.save();
      res.json(defaultPortfolio);
    } else {
      res.json(portfolio);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/portfolio', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you would typically send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
