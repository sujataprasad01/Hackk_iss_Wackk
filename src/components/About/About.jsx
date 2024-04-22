import React from 'react';
import styles from './About.module.css'; 
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <div className={styles.about}>
      <h2>Welcome to <strong>INNOVATIVE EDUCATION!</strong></h2>
      <p>
        At INNOVATIVE EDUCATION, we believe in the power of hands-on learning and practical experience. Our platform is designed to empower students.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to provide a dynamic learning environment where students can explore a wide range of courses, from programming and design to entrepreneurship and beyond. We aim to bridge the gap between education and real-world application by offering:
      </p>
      <ul>
        <li>Interactive Courses</li>
        <li>Project-Based Learning</li>
      </ul>
      <h3>What We Offer</h3>
      <p>
        - Courses: Choose from a diverse selection of courses across various disciplines.
        <br />
        - Project Uploads: Showcase your creativity and skills by uploading your projects.
      </p>
    </div>
    </>
  );
};

export default About;
