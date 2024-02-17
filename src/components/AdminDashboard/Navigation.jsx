// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="#" className="active">Dashboard</a></li>
        <li><Link to="/manage">Manage Courses</Link></li>
        <li><a href="#manage_course" id="manageCoursesLink">Manage Students</a></li>
        <li><a href="#">Manage Grades</a></li>
        <li><a href="/admin_dash/addcourse.html">Add courses</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;