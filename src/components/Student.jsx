import React from 'react'
import Navbar from './Navbar/Navbar'
import styles from "./Student.module.css"
import book from "../components/Assets/images.jpg"
import c from "../components/Assets/download (1).jpg"
import php from "../components/Assets/download (2).jpg"
import cpp from "../components/Assets/download (2).png"
import web from "../components/Assets/download (3).jpg"
import back from "../components/Assets/download (4).jpg"
function Student() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={book} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Java Programming</h5>
                <p className="card-text">Java is a popular programming language known for its platform independence, meaning code written in Java can run on any device that supports Java without modification.</p>
                <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={c} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming</h5>
                <p className="card-text">C is a procedural programming language known for its efficiency and low-level capabilities. It's often used for system programming, operating systems, embedded systems.</p>
                <a href="https://www.udemy.com/course/c-programming-for-beginners-/" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Web development involves building websites and web applications for the internet or intranet. It encompasses both frontend development (client-side) .</p>
                <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={back} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Backend Course</h5>
                <p className="card-text"> A backend course focuses on teaching the concepts and technologies used in server-side development. This includes topics such as web servers, databases.</p>
                <a href="#" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={cpp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C++ Programming</h5>
                <p className="card-text"> C++ is a powerful programming language widely used for system/software development, game development, and high-performance applications.</p>
                <a href="#" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={php} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">PHP (Hypertext Preprocessor) is a server-side scripting language widely used for web development. It's especially popular for building dynamic websites and web applications. .</p>
                <a href="#" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
