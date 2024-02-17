import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import styles from "../Home/Home.module.css"
function Home(props) {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.innerdiv}>
            <h1>
                <Link to='/login' className={styles.inner}>Login</Link>
            </h1>
            <br/>
            <h1>
                <Link to='/signup' className={styles.inner}>Signup</Link>
            </h1>
        </div>

        <br/>
        <br/>
        <br/>

{/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
</div>
    </>
  )
}

export default Home
