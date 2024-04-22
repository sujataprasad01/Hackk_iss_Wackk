import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from './Hero.module.css';
import dp from '../Assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
import Navbar from '../Navbar/Navbar';
import write from '../Assets/8913075.png';
import rimg from '../Assets/pngtree-study-by-reading-books-indonesian-national-education-day-png-image_3114521-removebg-preview.png';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
function Hero({ projectCount, softwareProjectsCount, hardwareProjectsCount, collegeProjectsCount, learningProjectsCount }) {
    const navigate = useNavigate();

    const logoutbutton = () => {
        navigate("/");
    };

    return (
        <>
            <Navbar />
            <div className={hero.maincon}>
                <div className={hero.profile}>
                    <img src={dp} alt="" className={hero.logo} />
                    <h3><strong>Hey User!</strong></h3>
                    <span><h4>Projects <br /> {projectCount}</h4></span>
                    <div style={{ display: 'flex', flexDirection: 'row' }} className={hero.write}>
                        <img src={write} alt="" /><button><Link to='/contact'>Reviews</Link></button>
                    </div>
                    <button className={hero.btn} onClick={logoutbutton}>LogOut</button>
                </div>
                <div className={hero.total}>
                    <div className={hero.heading}>
                        <h2>Welcome back, User! Let’s make your idea or thoughts into implementation BECAUSE "Plans are nothing; planning is everything"</h2>
                    </div>
                    <div className={hero.cat}>
                        <div className={hero.listcat}>
                            <div className={hero.innerlist}>
                                <div className={hero.card}>
                                    <h3>Total Software Projects</h3>
                                    <h3>{softwareProjectsCount}</h3>
                                </div>
                                <div className={hero.card}>
                                    <h3>Total Hardware Projects</h3>
                                    <h3>{hardwareProjectsCount}</h3>
                                </div>
                            </div>
                            <div className={hero.innerlist}>
                                <div className={hero.card}>
                                    <h3>Total College Projects</h3>
                                    <h3>{collegeProjectsCount}</h3>
                                </div>
                                <div className={hero.card}>
                                    <h3>Total Learning Projects</h3>
                                    <h3>{learningProjectsCount}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={hero.img}>
                            <img src={rimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hero;
