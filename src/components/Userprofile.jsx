import React, { useState } from 'react';

const UserProfile = () => {
  // State to store the profile image
  const [image, setImage] = useState(null);

  // Function to handle image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the image data in state
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>

      {/* Profile Image */}
      <div className="profile-container">
        <img
          src={image || 'https://via.placeholder.com/150'} // Use placeholder if no image
          alt="Profile"
          className="profile-image"
        />
        {/* File Input for Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginTop: '10px' }}
        />
      </div>

      {/* You can add other profile details below */}
      <p>Other profile information here...</p>
    </div>
  );
};

export default UserProfile;
