import React ,{useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../Assets/educationlogo.png';
import AddCoursePage from '../Manage/ManageCourses';
const Navbar = () => {
  const navigate = useNavigate();

  const logoutbutton = () => {
    navigate("/");
  };
  const [recentProjects, setRecentProjects] = useState([]);
  const [softwareCount, setSoftwareCount] = useState(0);
  const [hardwareCount, setHardwareCount] = useState(0);
  const handleProjectSubmit = (newProject) => {
    setRecentProjects([...recentProjects, newProject]);
  };

  const addproject=()=>{
   navigate('/student')
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${styles.verticalNavbar}`}>
        <div className="container-fluid">
          <img src={logo} alt="" className={styles.logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.verticalNavbarContent}`} id="navbarSupportedContent">
            <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.navbarNav}`}>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} aria-current="page" to="/explore">Explore Courses</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/student">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/hero">Student Dashboard</Link>
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/admin">Profile</Link>
              </li> */}
             
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/contact">Contact</Link>
              </li>
            </ul>
            <div className={styles.buttonsContainer}>
              <button className={`btn ${styles.projectButton}`} onClick={addproject}>Add New Project</button>
              <button className={`btn btn-danger ${styles.logoutButton}`} onClick={logoutbutton}>LogOut</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
