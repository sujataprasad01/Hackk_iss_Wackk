// ContactPage.js

import React, { useState } from 'react';
// import Navbar from './Navbar/Navbar'; // Assuming you have a Navbar component
import styles from "./Contact.module.css";

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
    // Here you can handle form submission, for now, let's just log the form data
    console.log(formData);
    // You can also send this data to your backend for further processing
  };

  return (
    <>
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
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
