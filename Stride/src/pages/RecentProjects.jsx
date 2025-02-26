import React from "react";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  // Dummy data for recent projects
  const recentProjects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the company website for better user experience.",
      progress: 75,
      tasksCompleted: 8,
      totalTasks: 12,
      startDate: "2023-10-01",
      endDate: "2023-11-15",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Develop a mobile app for iOS and Android platforms.",
      progress: 50,
      tasksCompleted: 15,
      totalTasks: 20,
      startDate: "2023-09-15",
      endDate: "2023-12-01",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Launch a new marketing campaign for the holiday season.",
      progress: 90,
      tasksCompleted: 5,
      totalTasks: 10,
      startDate: "2023-10-10",
      endDate: "2023-11-01",
    },
  ];

  return (
    <div className="page">
      <h1>Recent Projects</h1>

      {/* Project List */}
      <div className="project-list">
        {recentProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-details">
              <p><strong>Progress:</strong> {project.progress}%</p>
              <p><strong>Tasks Completed:</strong> {project.tasksCompleted}/{project.totalTasks}</p>
              <p><strong>Start Date:</strong> {project.startDate}</p>
              <p><strong>End Date:</strong> {project.endDate}</p>
            </div>
            <Link to={`/project/${project.id}`} className="view-details-button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;