import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminPanel } from './AdminPanel';
import { UserProfile } from './UserProfile';
import '../styles/Dashboard.css';

export function Dashboard() {
  const { user, logout, isAdmin } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <button 
          onClick={logout} 
          className="logout-btn"
        >
          Logout
        </button>
      </div>

      {isAdmin ? <AdminPanel /> : <UserProfile />}
    </div>
  );
}