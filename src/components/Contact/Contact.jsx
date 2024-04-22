// ContactPage.js

import React, { useState } from 'react';
// import Navbar from './Navbar/Navbar'; // Assuming you have a Navbar component
import styles from "./Contact.module.css";
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Footer from '../Footer/Footer';
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <div className={styles.outer}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Feedback:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.quicklinks}>
<About></About>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactPage;
