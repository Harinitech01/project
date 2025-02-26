import React from "react";

const ViewReports = () => {
  // Dummy data for project statistics
  const projectStats = [
    { id: 1, name: "Website Redesign", progress: 75, tasksCompleted: 8, totalTasks: 12 },
    { id: 2, name: "Mobile App Development", progress: 50, tasksCompleted: 15, totalTasks: 20 },
    { id: 3, name: "Marketing Campaign", progress: 90, tasksCompleted: 5, totalTasks: 10 },
  ];

  return (
    <div className="page">
      <h1>View Reports</h1>

      {/* Project Statistics Table */}
      <section className="project-stats">
        <h2>Project Statistics</h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Progress</th>
              <th>Tasks Completed</th>
              <th>Total Tasks</th>
            </tr>
          </thead>
          <tbody>
            {projectStats.map((stat) => (
              <tr key={stat.id}>
                <td>{stat.name}</td>
                <td>{stat.progress}%</td>
                <td>{stat.tasksCompleted}</td>
                <td>{stat.totalTasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Progress Chart (Placeholder) */}
      <section className="progress-chart">
        <h2>Progress Overview</h2>
        <div className="chart-placeholder">
          <p>Chart will be displayed here.</p>
        </div>
      </section>
    </div>
  );
};

export default ViewReports;