import React, { useState } from "react";
import ProSideBar from "./components/ProSideBar";
import NoProSelect from "./components/NoProSelect";
import NewProject from "./components/NewProject";
import SelectedPro from "./components/SelectedPro";

export default function App() {
  const [projectState, setprojectState] = useState({
    setProjectsId: undefined,
    projects: [],
    tasks: [], // Provide a default empty array for tasks
  });

  function handleAddTask(text) {
    setprojectState((prevState) => {
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
    setprojectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddPro() {
    setprojectState((prevSate) => {
      return {
        ...prevSate,
        setProjectsId: null,
      };
    });
  }

  function handleSelectProj(id) {
    setprojectState((prevSate) => {
      return {
        ...prevSate,
        setProjectsId: id,
      };
    });
  }

  function handleCancel() {
    setprojectState((prevSate) => {
      return {
        ...prevSate,
        setProjectsId: undefined,
      };
    });
  }

  function handleDelete() {
    setprojectState((prevSate) => {
      return {
        ...prevSate,
        setProjectsId: undefined,
        projects: prevSate.projects.filter(
          (project) => project.id !== prevSate.setProjectsId
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectState((prevSate) => {
      const ProId = Math.random();
      const newPro = {
        ...projectData,
        id: ProId,
      };
      return {
        setProjectsId: undefined,
        projects: [...prevSate.projects, newPro],
      };
    });
  }

  const selectedproject = projectState.projects.find(
    (project) => project.id === projectState.setProjectsId
  );

  let content = (
    <SelectedPro
      project={selectedproject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.setProjectsId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.setProjectsId === undefined) {
    content = <NoProSelect onstartAddProject={handleStartAddPro} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProSideBar
        onSelectProj={handleSelectProj}
        onstartAddProject={handleStartAddPro}
        projects={projectState.projects}
        selectedProId={projectState.selectedProId}
      />
      {content}
    </main>
  );
}
