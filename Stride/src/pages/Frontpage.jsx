import React from "react";
import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <div className="frontpage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Stride</h1>
        <p>Your ultimate project management solution.</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Stride?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Task Management</h3>
            <p>Easily create, assign, and track tasks for your team.</p>
          </div>
          <div className="card">
            <h3>Collaboration</h3>
            <p>Work together seamlessly with real-time updates.</p>
          </div>
          <div className="card">
            <h3>Analytics</h3>
            <p>Get insights into your project's progress and performance.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join Stride today and take control of your projects.</p>
        <Link to="/signup" className="btn">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Frontpage;