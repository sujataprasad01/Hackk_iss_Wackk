import React, { useState } from 'react';
// import './AddCoursePage.css'; // Import CSS file
import './Manage.css'
const AddCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Create new course object
    const newCourse = {
      id: Math.random(), // Generate unique ID (for demonstration)
      courseName,
      instructor,
      duration,
    };

    // Add new course to courses list
    setCourses([...courses, newCourse]);

    // Reset form fields
    setCourseName('');
    setInstructor('');
    setDuration('');
  };

  return (
    <div className="container">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="instructor">Instructor:</label>
          <input
            type="text"
            id="instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-button">Add Course</button>
      </form>

      <div className="container">
        <h2>Manage Courses</h2>
        <div id="coursesList" className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course">
              <h2 className="course-title">{course.courseName}</h2>
              <p className="course-details">Instructor: {course.instructor}</p>
              <p className="course-details">Duration: {course.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;