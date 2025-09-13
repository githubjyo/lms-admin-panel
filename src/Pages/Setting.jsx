import React from 'react';

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>Update your admin panel settings here.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Admin Username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Admin Email" />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Settings;
