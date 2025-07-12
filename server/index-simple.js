const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample portfolio data (no database needed for now)
const portfolioData = {
  name: 'Aslesh Choudhary',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with experience in the MERN stack, creating amazing web applications and bringing ideas to life through clean, efficient code.',
  skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'HTML', 'CSS', 'Git'],
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with MERN stack showcasing my skills and projects.',
      technologies: ['React', 'Node.js', 'Express.js', 'CSS3'],
      githubUrl: 'https://github.com/asleshchoudhary/portfolio',
      liveUrl: 'https://asleshchoudhary.com',
      image: null
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack e-commerce application with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/asleshchoudhary/ecommerce',
      liveUrl: 'https://myecommerce.com',
      image: null
    },
    {
      title: 'Task Manager',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/asleshchoudhary/taskmanager',
      liveUrl: 'https://mytaskmanager.com',
      image: null
    }
  ],
  contact: {
    email: 'aslesh.choudhary@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/asleshchoudhary',
    github: 'https://github.com/asleshchoudhary',
    resume: '/files/aslesh-choudhary-resume.pdf'
  }
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.put('/api/portfolio', (req, res) => {
  // In a real app, this would update the database
  // For now, we'll just return the updated data
  const updatedData = { ...portfolioData, ...req.body };
  res.json(updatedData);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Log the contact form submission
  console.log('📧 Contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('---');
  
  res.json({ message: 'Thank you for your message! I\'ll get back to you soon.' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Portfolio API: http://localhost:${PORT}/api/portfolio`);
});
