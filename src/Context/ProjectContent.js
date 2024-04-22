import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [recentProjects, setRecentProjects] = useState([]);

  const addProject = (newProject) => {
    setRecentProjects([...recentProjects, newProject]);
  };

  const removeProject = (projectId) => {
    const updatedProjects = recentProjects.filter(project => project.id !== projectId);
    setRecentProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider value={{ recentProjects, addProject, removeProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
