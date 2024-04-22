import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation   } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Student from './components/Student';
import Navbar from './components/Navbar/Navbar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import About from './components/About/About';
import AddCoursePage from './components/Manage/ManageCourses';
import ContactPage from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import CommonAncestorComponent from './components/CommonAncestorComponent';
function App() {


  const [userName, setUserName]=useState("");
  // const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [projectCount, setProjectCount] = useState(0);
  const [softwareProjectsCount, setSoftwareProjectsCount] = useState(0);
  const [hardwareProjectsCount, setHardwareProjectsCount] = useState(0);
  const [collegeProjectsCount, setCollegeProjectsCount] = useState(0);
  const [learningProjectsCount, setLearningProjectsCount] = useState(0);


  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
     if(user){
      setUserName(user.displayName)
      setIsLoggedIn(true);
     }else{
      setUserName("")
      setIsLoggedIn(false);
      console.log(user)
     }
    })
  }, [])

  // const isHomeRoute = location.pathname === '/';
  // const isExploreRoute = location.pathname === '/explore';
  return (
    <div className="App">
     <Router>
     {/* {isLoggedIn  && <Navbar />} */}
      {/* <Home></Home> */}
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/' element={<Home name={userName}></Home>} />
        <Route path='/explore' element={<Student></Student>}/>
        <Route path='/common' element={<CommonAncestorComponent></CommonAncestorComponent>}/>
        <Route path='/hero' element={ <Hero
              projectCount={projectCount}
              softwareProjectsCount={softwareProjectsCount}
              hardwareProjectsCount={hardwareProjectsCount}
              collegeProjectsCount={collegeProjectsCount}
              learningProjectsCount={learningProjectsCount}
            />}/>
        <Route path='/student' element={<StudentDashboard  setProjectCount={setProjectCount} 
              setSoftwareProjectsCount={setSoftwareProjectsCount}
              setHardwareProjectsCount={setHardwareProjectsCount}
              setCollegeProjectsCount={setCollegeProjectsCount}
              setLearningProjectsCount={setLearningProjectsCount}></StudentDashboard>}/>
        {/* <Route path='/about' element={<About></About>}/> */}
        <Route path='/manage' element={<AddCoursePage></AddCoursePage>}/>
        <Route path='/contact' element={<ContactPage></ContactPage>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
