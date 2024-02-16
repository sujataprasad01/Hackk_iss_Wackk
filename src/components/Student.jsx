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
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={c} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.udemy.com/course/c-programming-for-beginners-/" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={cpp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C++ Programming</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Explore Course</a>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={php} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
