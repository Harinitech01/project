import React from "react";

const Dashboard = () => {
  // Dummy data for projects and tasks
  const projects = [
    { id: 1, name: "Website Redesign", tasks: 12, completed: 8 },
    { id: 2, name: "Mobile App Development", tasks: 20, completed: 15 },
    { id: 3, name: "Marketing Campaign", tasks: 10, completed: 5 },
  ];

  // Dummy data for recent activity
  const recentActivity = [
    { id: 1, action: "Task Completed", details: "Homepage Design", time: "2 hours ago" },
    { id: 2, action: "New Task Added", details: "API Integration", time: "5 hours ago" },
    { id: 3, action: "Project Updated", details: "Mobile App Development", time: "1 day ago" },
  ];

  // Dummy data for upcoming deadlines
  const upcomingDeadlines = [
    { id: 1, task: "Finalize Design Mockups", project: "Website Redesign", deadline: "2023-10-25" },
    { id: 2, task: "Test API Endpoints", project: "Mobile App Development", deadline: "2023-10-28" },
    { id: 3, task: "Launch Marketing Campaign", project: "Marketing Campaign", deadline: "2023-11-01" },
  ];

  // Dummy data for team members
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Frontend Developer" },
    { id: 2, name: "Jane Smith", role: "Backend Developer" },
    { id: 3, name: "Alice Johnson", role: "Project Manager" },
  ];

  // Dummy data for project statistics
  const projectStatistics = [
    { id: 1, name: "Website Redesign", progress: 75, tasksCompleted: 8, totalTasks: 12 },
    { id: 2, name: "Mobile App Development", progress: 50, tasksCompleted: 15, totalTasks: 20 },
    { id: 3, name: "Marketing Campaign", progress: 90, tasksCompleted: 5, totalTasks: 10 },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Grid Layout for Project Overview, Team Members, and Project Statistics */}
      <div className="dashboard-grid">
        {/* Project Overview */}
        <section className="project-overview">
          <h2>Project Overview</h2>
          <div className="project-cards">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>Tasks: {project.tasks}</p>
                <p>Completed: {project.completed}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${(project.completed / project.tasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="team-members">
          <h2>Team Members</h2>
          <div className="member-list">
            {teamMembers.map((member) => (
              <div key={member.id} className="member-card">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Statistics */}
        <section className="project-statistics">
          <h2>Project Statistics</h2>
          <div className="stats-cards">
            {projectStatistics.map((stat) => (
              <div key={stat.id} className="stats-card">
                <h3>{stat.name}</h3>
                <p>Progress: {stat.progress}%</p>
                <p>Tasks Completed: {stat.tasksCompleted}/{stat.totalTasks}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Upcoming Deadlines */}
      <section className="upcoming-deadlines">
        <h2>Upcoming Deadlines</h2>
        <div className="deadline-list">
          {upcomingDeadlines.map((deadline) => (
            <div key={deadline.id} className="deadline-item">
              <p><strong>{deadline.task}</strong> - {deadline.project}</p>
              <small>Deadline: {deadline.deadline}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <p><strong>{activity.action}</strong>: {activity.details}</p>
              <small>{activity.time}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;