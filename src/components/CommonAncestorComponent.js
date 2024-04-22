import React, { useState } from 'react';
import Hero from './Hero/Hero';
import StudentDashboard from './Dashboard/StudentDashboard';

const CommonAncestorComponent = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [softwareProjectsCount, setSoftwareProjectsCount] = useState(0);
  const [hardwareProjectsCount, setHardwareProjectsCount] = useState(0);
  const [collegeProjectsCount, setCollegeProjectsCount] = useState(0);
  const [learningProjectsCount, setLearningProjectsCount] = useState(0);

  const handleProjectSubmit = (newProject) => {
    setProjectCount(projectCount + 1);

    if (newProject.projectType === 'software') {
      setSoftwareProjectsCount(softwareProjectsCount + 1);
    } else if (newProject.projectType === 'hardware') {
      setHardwareProjectsCount(hardwareProjectsCount + 1);
    } else if (newProject.projectType === 'college') {
      setCollegeProjectsCount(collegeProjectsCount + 1);
    } else if (newProject.projectType === 'learning') {
      setLearningProjectsCount(learningProjectsCount + 1);
    }
  };

  return (
    <>
      <Hero 
        projectCount={projectCount}
        softwareProjectsCount={softwareProjectsCount}
        hardwareProjectsCount={hardwareProjectsCount}
        collegeProjectsCount={collegeProjectsCount}
        learningProjectsCount={learningProjectsCount}
      />
      <StudentDashboard onProjectSubmit={handleProjectSubmit} />
    </>
  );
};

export default CommonAncestorComponent;
