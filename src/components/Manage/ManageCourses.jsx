import React, { useState } from 'react';
import './Manage.css';

const AddCoursePage = ({ onProjectSubmit, setSoftwareCount, softwareCount, setHardwareCount, hardwareCount, collegeCount, learningCount }) => {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [description, setDescription] = useState('');
  const [codeFile, setCodeFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [projectVideo, setProjectVideo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Create new project object
    const newProject = {
      id: Math.random(), // Generate unique ID (for demonstration)
      projectName,
      projectType,
      collegeName,
      studentName,
      description,
      codeFile,
      coverImage,
      projectVideo,
    };

    onProjectSubmit(newProject);

    if (projectType === 'software') {
      setSoftwareCount(softwareCount + 1);
    } else if (projectType === 'hardware') {
      setHardwareCount(hardwareCount + 1);
    }
    // else if (projectType === 'college') {
    //   collegeCount(hardwareCount + 1);
    // }
    // else if (projectType === 'learning') {
    //   learningCount(hardwareCount + 1);
    // }


    // Reset form fields
    setProjectName('');
    setProjectType('');
    setCollegeName('');
    setStudentName('');
    setDescription('');
    setCodeFile(null);
    setCoverImage(null);
    setProjectVideo(null);
  };


  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="projectType">Project Type:</label>
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="">Select Project Type</option>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
              <option value="college">College</option>
              <option value="learning">Learning</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="collegeName">College Name:</label>
            <input
              type="text"
              id="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="input-wrapper">
            <label htmlFor="codeFile">Code Upload:</label>
            <input
              type="file"
              id="codeFile"
              onChange={(e) => setCodeFile(e.target.files[0])}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="coverImage">Cover Image:</label>
            <input
              type="file"
              id="coverImage"
              onChange={(e) => setCoverImage(e.target.files[0])}
              required
            />
          </div>
          {/* <div className="input-wrapper">
            <label htmlFor="projectVideo">Project Video:</label>
            <input
              type="file"
              id="projectVideo"
              onChange={(e) => setProjectVideo(e.target.files[0])}
              required
            />
          </div> */}
          <button type="submit" className="add-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddCoursePage;
