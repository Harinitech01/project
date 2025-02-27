import React, { useState } from "react";


const Profile = () => {
  // Dummy user data (replace with actual user data from your backend or context)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "", // Initially empty
    bio: "I'm a passionate developer who loves building amazing projects!",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData); // Update user data
    setEditMode(false); // Exit edit mode
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <button
          className="edit-button"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Picture */}
      <div className="profile-picture">
        {user.profilePicture ? (
          <img src={user.profilePicture} alt="Profile" />
        ) : (
          <div className="placeholder"></div>
        )}
        {editMode && (
          <div className="image-upload">
            <label htmlFor="profile-picture-upload" className="upload-button">
              Upload Image
            </label>
            <input
              type="file"
              id="profile-picture-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
        )}
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;