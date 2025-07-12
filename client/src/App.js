import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolioData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load portfolio data');
      setLoading(false);
      console.error('Error fetching portfolio data:', err);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchPortfolioData}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
