import React, { useState, useEffect } from 'react';
import '../css/LandingPage.css';
import MainPage from './MainPage'


const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    // Simulate a delay before revealing the main page
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Landing Page */}
      <div className={`landing-page ${showMainPage ? 'hide' : ''}`}>
        <div className="hero">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">I am a Frontend Developer</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>

      {/* Main Page */}
      {showMainPage&&<MainPage/>}
    </div>
    
  );
};

export default App;
