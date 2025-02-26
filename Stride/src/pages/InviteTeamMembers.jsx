import React, { useState } from "react";

const InviteTeamMembers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invitation Sent:", { email });
    alert("Invitation sent successfully!");
  };

  return (
    <div className="page">
      <h1>Invite Team Members</h1>
      <form onSubmit={handleSubmit} className="invite-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Invitation</button>
      </form>
    </div>
  );
};

export default InviteTeamMembers;