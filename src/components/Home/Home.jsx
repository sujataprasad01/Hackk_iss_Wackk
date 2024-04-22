import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import styles from "../Home/Home.module.css"
import leftimg from '../Assets/Exam-Transparent-Image.png'
import Login from '../Login/Login'
import logo from '../Assets/educationlogo.png'
function Home(props) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.leftside}>
      <h1>WELCOME</h1>
        <img src={leftimg} alt="" />
      </div>
        <div className={styles.innerdiv}>
          <div className={styles.popup}>
            <Login></Login>
            {/* <h1>
                <Link to='/login' className={styles.inner}>Login</Link>
            </h1>
            <br/>
            <h1>
                <Link to='/signup' className={styles.inner}>Signup</Link>
            </h1> */}
            </div>
        </div>
{/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
</div>
    </>
  )
}

export default Home
