import React from 'react';
import styles from "../Dashboard/StudentDashboard.module.css"

const StudentDashboard = () => {
  // Mock course data with titles and descriptions
  const courses = [
    { id: 1, title: 'JavaSript', description: 'JavaScript is a programming language commonly used for creating interactive effects within web browsers.' },
    { id: 2, title: 'DBMS', description: 'Database Management Systems (DBMS) are software applications specifically designed to interact with the user, other applications, and the database itself to capture and analyze data.' },
    { id: 3, title: 'Operating System', description: 'An operating system (OS) is a software that acts as an interface between computer hardware and the user. It provides various services to manage the computer\'s resources.' },
    { id: 4, title: 'C++', description: 'C++ is a powerful general-purpose programming language created as an extension of the C programming language. It is widely used in developing system/application software, client-server applications, and embedded firmware.' },
    { id: 5, title: 'Python', description: 'Python is an interpreted, high-level, general-purpose programming language known for its simplicity and easy-to-read syntax. It is widely used in web development, data analysis, artificial intelligence, and more.' },
    { id: 6, title: 'C', description: 'C is a general-purpose, procedural programming language developed in the early 1970s. It is widely used for system/application software, game development, and embedded systems programming.' },
    // Add more courses as needed
  ];

  return (
    <div className={styles.dashboardcontainer}>
      <h2>Welcome to Student Dashboard</h2>
      <h3 ><b> Purchased Courses </b></h3>
      <div className={styles.courselist}>
        {courses.map(course => (
          <div key={course.id} className={styles.coursecard}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Link button to access course details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;