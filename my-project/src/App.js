import React, { useState } from "react";
import ProSideBar from "./components/ProSideBar";
import NoProSelect from "./components/NoProSelect";
import NewProject from "./components/NewProject";
import SelectedPro from "./components/SelectedPro";

export default function App() {
  const [projectState, setProjectState] = useState({
    setProjectsId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    if (text.trim().length <= 0) {
      alert("Please enter a task first");
      return;
    }

    setProjectState((prevState) => {
      const TaskId = Math.random();
      const newTask = {
        text: text,
        ProId: prevState.setProjectsId,
        id: TaskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...(prevState.tasks || [])],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleStartAddPro() {
    setProjectState((prevState) => ({
      ...prevState,
      setProjectsId: null, // Change this to undefined if necessary
    }));
  }

  function handleSelectProj(id) {
    setProjectState((prevState) => ({
      ...prevState,
      setProjectsId: id,
    }));
  }

  function handleCancel() {
    setProjectState((prevState) => ({
      ...prevState,
      setProjectsId: undefined,
    }));
  }

  function handleDelete() {
    setProjectState((prevState) => ({
      ...prevState,
      setProjectsId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.setProjectsId
      ),
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const ProId = Math.random();
      const newPro = {
        ...projectData,
        id: ProId,
      };
      return {
        ...prevState,
        setProjectsId: undefined,
        projects: [...prevState.projects, newPro],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.setProjectsId
  );

  let content;

  if (projectState.setProjectsId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.setProjectsId === undefined) {
    content = <NoProSelect onstartAddProject={handleStartAddPro} />;
  } else {
    content = (
      <SelectedPro
        project={selectedProject}
        onDelete={handleDelete}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProSideBar
        onSelectProj={handleSelectProj}
        onstartAddProject={handleStartAddPro}
        projects={projectState.projects}
        selectedProId={projectState.setProjectsId}
      />
      {content}
    </main>
  );
}
