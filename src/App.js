import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Student from './components/Student';
import Navbar from './components/Navbar/Navbar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import About from './components/About/About';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddCoursePage from './components/Manage/ManageCourses';
import ContactPage from './components/Contact/Contact';
function App() {


  const [userName, setUserName]=useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
     if(user){
      setUserName(user.displayName)
     }else setUserName("")
      console.log(user)
    })
  }, [])
  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/' element={<Home name={userName}></Home>} />
        <Route path='/explore' element={<Student></Student>}/>
        <Route path='/student' element={<StudentDashboard></StudentDashboard>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/admin' element={<AdminDashboard></AdminDashboard>}/>
        <Route path='/manage' element={<AddCoursePage></AddCoursePage>}/>
        <Route path='/contact' element={<ContactPage></ContactPage>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
