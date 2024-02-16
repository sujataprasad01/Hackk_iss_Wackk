import React from 'react';
import styles from "./About.module.css" // Import CSS file

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <h2 className={styles.aboutheading}>About Teacher Learning App</h2>
      <p className={styles.aboutcontent}>
        The Teacher Learning App is a platform designed to empower educators with the tools and resources they need to enhance their teaching skills and improve student learning outcomes.
      </p>
      <div className={styles.aboutlist}>
        <h3>Features</h3>
        <ul>
          <li className={styles.aboutlistitem}>Interactive Courses: Engaging courses designed to help teachers explore new teaching methodologies, technology integration, and subject-specific content.</li>
          <li className={styles.aboutlistitem}>Performance Assessment: Tools for evaluating teacher performance and providing constructive feedback for professional development.</li>
          <li className={styles.aboutlistitem}>Motivation Driven: Incentive mechanisms and performance-based rewards to motivate teachers and recognize their efforts.</li>
          <li className={styles.aboutlistitem}>Capacity Building: Continuous learning opportunities and resources to support teachers in their professional growth journey.</li>
        </ul>
      </div>
      <div className={styles.aboutmission}>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower educators with the knowledge, skills, and support they need to create dynamic learning environments and inspire student success.
        </p>
      </div>
    </div>
  );
};

export default About;