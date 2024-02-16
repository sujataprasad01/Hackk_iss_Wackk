// Navigation.js
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="#" className="active">Dashboard</a></li>
        <li><a href="#manage_course" id="manageCoursesLink">Manage Courses</a></li>
        <li><a href="#">Manage Students</a></li>
        <li><a href="#">Manage Grades</a></li>
        <li><a href="/admin_dash/addcourse.html">Add courses</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;