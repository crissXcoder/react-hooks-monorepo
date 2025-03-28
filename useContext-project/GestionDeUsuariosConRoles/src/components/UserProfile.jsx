// src/components/UserProfile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

export function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="user-profile">
      <h2>👤 User Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
}