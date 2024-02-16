// Course.js
import React from 'react';

const Course = ({ title, instructor, duration }) => {
  return (
    <div className="course">
      <h2 className="course-title">{title}</h2>
      <p className="course-details">Instructor: {instructor}</p>
      <p className="course-details">Duration: {duration}</p>
      <p><button>Enroll</button></p>
    </div>
  );
};

export default Course;