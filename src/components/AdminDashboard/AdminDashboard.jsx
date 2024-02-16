// AdminDashboard.js
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Course from './Course';
import './admin.css'
const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="course-grid" id="manage_course">
        <Course title="Operating system" instructor="John Doe" duration="10 weeks" />
        <Course title="Java Programming" instructor="Jane Smith" duration="8 weeks" />
        <Course title="PHP Programming" instructor="Hitesh Chaudhary" duration="6 weeks" />
        <Course title="Python Programming" instructor="code with harray" duration="8 weeks" />
        <Course title="Database management" instructor="Love Babber" duration="10 weeks" />
        <Course title="Go-Lang" instructor="jenila" duration="8 weeks" />
        <Course title="Asp.net Programming" instructor="Jane Smith" duration="8 weeks" />
        <Course title="Data Structure" instructor="Jane Smith" duration="8 weeks" />
        {/* Add more courses as needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;