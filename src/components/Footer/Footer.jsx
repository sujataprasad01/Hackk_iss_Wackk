import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/educationlogo.png'
function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleCopy = () => {
        const phoneNumber = "+91 9145110493";
        navigator.clipboard.writeText(phoneNumber);
        // props.showAlert("Your text is copied to clipboard", "success")

    }

    return (
        <>
            <div className='main_container'>
                <div className='sub_container'>
                    <div className='heading'>
                        <img className='logo' src={logo}></img>
                    </div>
                    <h3>At INNOVATIIVE EDUCATION, we believe in the power of hands-on learning and practical experience. Our platform is designed to empower students like you to unleash your creativity, develop new skills, and showcase your talents to the world.</h3>
                </div>
                <div className='sub_container2'>
                    <div className='row'>
                        <h3>Quick Links</h3>
                        <div>
                        <Link to='/' onClick={scrollToTop}><h5> - Student Dashborad</h5></Link>
                        </div><div>
                        <Link to='/explore' onClick={scrollToTop}><h5> - Explore Courses</h5></Link>
                        </div> <div>
                        <Link to='/student' onClick={scrollToTop}><h5> - Projects</h5></Link>
                        </div><div>
                        <Link to='/contact' onClick={scrollToTop}><h5> - About and Contact</h5></Link>
                        {/* <Link to='/contact'><h4>Conatct Us</h4></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

