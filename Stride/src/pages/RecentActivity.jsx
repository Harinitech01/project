import React from "react";

const RecentActivity = () => {
  // Dummy data for recent activity
  const recentActivity = [
    {
      id: 1,
      action: "Task Completed",
      details: "Homepage Design",
      time: "2 hours ago",
      project: "Website Redesign",
    },
    {
      id: 2,
      action: "New Task Added",
      details: "API Integration",
      time: "5 hours ago",
      project: "Mobile App Development",
    },
    {
      id: 3,
      action: "Project Updated",
      details: "Mobile App Development",
      time: "1 day ago",
      project: "Mobile App Development",
    },
    {
      id: 4,
      action: "Team Member Added",
      details: "John Doe (Frontend Developer)",
      time: "2 days ago",
      project: "Marketing Campaign",
    },
    {
      id: 5,
      action: "Task Assigned",
      details: "Social Media Strategy",
      time: "3 days ago",
      project: "Marketing Campaign",
    },
  ];

  return (
    <div className="page">
      <h1>Recent Activity</h1>

      {/* Activity List */}
      <div className="activity-list">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-header">
              <h3>{activity.action}</h3>
              <small>{activity.time}</small>
            </div>
            <p><strong>Project:</strong> {activity.project}</p>
            <p><strong>Details:</strong> {activity.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;