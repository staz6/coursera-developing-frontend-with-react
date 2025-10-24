import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Paradise Nursery</h1>
          <p className="hero-description">
            Discover the perfect houseplants to transform your space into a green paradise. 
            From elegant succulents to lush tropical plants, we offer a carefully curated 
            selection of healthy, beautiful plants that will bring life and joy to your home.
          </p>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>Why Choose Paradise Nursery?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Healthy Plants</h3>
              <p>All our plants are carefully nurtured and inspected to ensure they arrive in perfect condition.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and safe shipping to get your new plants to you as soon as possible.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Expert Care</h3>
              <p>Detailed care instructions included with every plant to help them thrive.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
