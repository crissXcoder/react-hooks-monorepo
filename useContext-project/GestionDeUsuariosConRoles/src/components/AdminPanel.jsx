import React from 'react';
import { users } from '../data/users';

export function AdminPanel() {
  return (
    <div className="admin-panel">
      <h2>🛡️ Admin Dashboard</h2>
      <div className="user-list">
        <h3>Registered Users</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}