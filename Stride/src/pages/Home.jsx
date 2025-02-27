import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  
  const recentProjects = [
    { id: 1, name: "Website Redesign", progress: 75 },
    { id: 2, name: "Mobile App Development", progress: 50 },
    { id: 3, name: "Marketing Campaign", progress: 90 },
  ];

  return (
    <div className="home">
      <h1>Welcome Back!</h1>
      <p>Manage your projects efficiently with Stride.</p>

    
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/create-project" className="btn">Create New Project</Link>
          <Link to="/invite-team" className="btn">Invite Team Members</Link>
          <Link to="/view-reports" className="btn">View Reports</Link>
        </div>
      </section>

      <section className="recent-projects">
        <h2>Recent Projects</h2>
        <div className="project-list">
          {recentProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p>{project.progress}% Complete</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;