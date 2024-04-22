import React from 'react'
import Navbar from './Navbar/Navbar'
import styles from "./Student.module.css"
import book from "../components/Assets/images.jpg"
import c from "../components/Assets/download (1).jpg"
import php from "../components/Assets/download (2).jpg"
import cpp from "../components/Assets/download (2).png"
import web from "../components/Assets/download (3).jpg"
import back from "../components/Assets/download (4).jpg"
import rightimg from './Assets/images__2_-removebg-preview.png'
import html from './Assets/download (5).jpg'
import Footer from './Footer/Footer'
function Student() {
  return (
    <>
      <Navbar />
        <h1>Explore Courses</h1>
      <div className={styles.twodiv}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={book} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Java Programming</h5>
                <p className="card-text">Java is a popular programming language known for its platform independence, meaning code written in Java can run on any device that supports Java without modification.</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/java-the-complete-java-developer-course/">Explore Course</a></button>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={html} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">HTML serves as the backbone of the internet, enabling the creation of visually appealing and interactive web pages through its versatile structure and extensive range of elements.</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/?couponCode=IND21PM" >Explore Course</a></button>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={c} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming</h5>
                <p className="card-text">C is a procedural programming language known for its efficiency and low-level capabilities. It's often used for system programming, operating systems, embedded systems.</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/c-programming-for-beginners-/" >Explore Course</a></button>
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
                <button className={styles.btn}><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" >Explore Course</a></button>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={cpp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C++ Programming</h5>
                <p className="card-text"> C++ is a powerful programming language widely used for system/software development, game development, and high-performance applications.</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" >Explore Course</a></button>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img src={php} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">PHP (Hypertext Preprocessor) is a server-side scripting language widely used for web development. It's especially popular for building dynamic websites and web applications. .</p>
                <button className={styles.btn}><a href="#" >Explore Course</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.column}>
            <div className={styles.card}>
              <img src={php} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">PHP (Hypertext Preprocessor) is a server-side scripting language widely used for web development. It's especially popular for building dynamic websites and web applications. .</p>
                <button className={styles.btn}><a href="#" >Explore Course</a></button>
              </div>
            </div>
          </div>
        <div className={styles.column}>
            <div className={styles.card}>
              <img src={c} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming</h5>
                <p className="card-text">C is a procedural programming language known for its efficiency and low-level capabilities. It's often used for system programming, operating systems, embedded systems.</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/c-programming-for-beginners-/" >Explore Course</a></button>
              </div>
            </div>
          </div>
        <div className={styles.column}>
            <div className={styles.card}>
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Web development involves building websites and web applications for the internet or intranet. It encompasses both frontend development (client-side) .</p>
                <button className={styles.btn}><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" >Explore Course</a></button>
              </div>
            </div>
          </div>
          </div>

      </div>
      {/* <div className={styles.rightimg}>
        <img src={rightimg} alt="" />
      </div> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default Student
