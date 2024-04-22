import React, { useState, useEffect } from 'react';
import styles from "../Dashboard/StudentDashboard.module.css";
import Navbar from '../Navbar/Navbar';
import leftimgg from '../Assets//Exam-Transparent-Image.png';
import AddCoursePage from '../Manage/ManageCourses';
import Footer from '../Footer/Footer';
import { ProjectProvider } from '../../Context/ProjectContent'; 

const StudentDashboard = ({ 
  setProjectCount, 
  setSoftwareProjectsCount, 
  setHardwareProjectsCount, 
  setCollegeProjectsCount, 
  setLearningProjectsCount 
}) => {
  const [recentProjects, setRecentProjects] = useState(JSON.parse(localStorage.getItem('recentProjects')) || []);
  const [softwareCount, setSoftwareCount] = useState(Number(localStorage.getItem('softwareCount')) || 0);
  const [hardwareCount, setHardwareCount] = useState(Number(localStorage.getItem('hardwareCount')) || 0);
  
  useEffect(() => {
    localStorage.setItem('recentProjects', JSON.stringify(recentProjects));
    localStorage.setItem('softwareCount', softwareCount);
    localStorage.setItem('hardwareCount', hardwareCount);
    setProjectCount(recentProjects.length); 

    const softwareProjects = recentProjects.filter(project => project.projectType === 'software');
    const hardwareProjects = recentProjects.filter(project => project.projectType === 'hardware');
    const collegeProjects = recentProjects.filter(project => project.projectType === 'college');
    const learningProjects = recentProjects.filter(project => project.projectType === 'learning');

    setSoftwareProjectsCount(softwareProjects.length);
    setHardwareProjectsCount(hardwareProjects.length);
    setCollegeProjectsCount(collegeProjects.length);
    setLearningProjectsCount(learningProjects.length);
  }, [recentProjects, softwareCount, hardwareCount, setProjectCount, setSoftwareProjectsCount, setHardwareProjectsCount, setCollegeProjectsCount, setLearningProjectsCount]);
  
  const handleProjectSubmit = (newProject) => {
    setRecentProjects([...recentProjects, newProject]);
  
    if (newProject.projectType === 'software') {
      const newSoftwareCount = softwareCount + 1;
      setSoftwareCount(newSoftwareCount);
      localStorage.setItem('softwareCount', newSoftwareCount);
      console.log("Software Count:", newSoftwareCount);
    } 
  // else if (newProject.projectType === 'hardware') {
  // //     const newHardwareCount = hardwareCount + 1;
  //     setHardwareCount(newHardwareCount);
  //     localStorage.setItem('hardwareCount', newHardwareCount);
  //     console.log("Hardware Count:", newHardwareCount);
  //   }
  //   else if (newProject.projectType === 'college') {
  //     const newCollegeCount = recentProjects.filter(project => project.projectType === 'college').length + 1;
  //     setCollegeProjectsCount(newCollegeCount);
  //     localStorage.setItem('collegeCount', newCollegeCount);
  //     console.log("College Count:", newCollegeCount);
  //   }
  //   else if (newProject.projectType === 'learning') {
  //     const newLearningCount = recentProjects.filter(project => project.projectType === 'learning').length + 1;
  //     setLearningProjectsCount(newLearningCount);
  //     localStorage.setItem('learningCount', newLearningCount);
  //     console.log("Learning Count:", newLearningCount);
  //   }
  };

  const handleOpenFile = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } else {
      alert('No file uploaded!');
    }
  };

  const handleRemoveProject = (projectId) => {
    const updatedProjects = recentProjects.filter(project => project.id !== projectId);
    setRecentProjects(updatedProjects);
  };

  return (
    <ProjectProvider> 
      <>
        <Navbar />
        <div className={styles.maindiv}>
          <div className={styles.dashboardcontainer}>
            <div className={styles.leftimg}>
              <h1><strong>Your Projects are Secure!</strong></h1>
              <img src={leftimgg} alt="" className={styles.exam}/>
            </div>
            <div className={styles.form}>
              <AddCoursePage 
                onProjectSubmit={handleProjectSubmit} 
                setSoftwareCount={setSoftwareCount}
                softwareCount={softwareCount}
                setHardwareCount={setHardwareCount}
                hardwareCount={hardwareCount}
                setCollegeCount={setCollegeProjectsCount}
                setLearningCount={setLearningProjectsCount}
              />
            </div>
          </div>
          <h3 className={styles.recent}><b> Recent Uploaded Projects </b></h3>
          <div className={styles.rightcontent}>
  {/* {recentProjects.length === 0 ? (
    <p>No projects uploaded yet.</p>
  ) : (
    <div className={styles.courselist}>
      {recentProjects.map(project => (
        <div key={project.id} className={styles.coursecard}>
        </div>
      ))}
    </div>
  )} */}
            <div className={styles.courselist}>
              {recentProjects.map(project => (
                <div key={project.id} className={styles.coursecard}>
                  <h3>{project.projectName}</h3>
                  <p><strong>Project Type:</strong> {project.projectType}</p>
                  <p><strong>College Name:</strong> {project.collegeName}</p>
                  <p><strong>Student Name:</strong> {project.studentName}</p>
                  <p><strong>Description:</strong> {project.description}</p>
                  <button onClick={() => handleOpenFile(project.codeFile)}>Open File</button>
                  <button onClick={() => handleRemoveProject(project.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className={styles.count}>
              <div className={styles.coursecard}>
                <h3>Software Projects</h3>
                <h3>{softwareCount}</h3>
              </div>
              <div className={styles.coursecard}>
                <h3>Hardware Projects</h3>
                <h3>{hardwareCount}</h3>
              </div>
              {/* <div className={styles.coursecard}>
                <h3>College Projects</h3>
                <h3>{recentProjects.filter(project => project.projectType === 'college').length}</h3>
              </div>
              <div className={styles.coursecard}>
                <h3>Learning Projects</h3>
                <h3>{recentProjects.filter(project => project.projectType === 'learning').length}</h3>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </ProjectProvider>
  );
};

export default StudentDashboard;
