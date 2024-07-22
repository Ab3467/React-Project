import React,{useState,useEffect} from "react"
import ProSideBar from "./components/ProSideBar"
import NoProSelect from "./components/NoProSelect"
import NewProject from "./components/NewProject";
import SelectedPro from "./components/SelectedPro";



export default function App() {
  const [ProjectsStat, setProjectsStat] = useState({
    setProjectsId: undefined,
    projects: [],
    tasks: [], // Provide a default empty array for tasks
  });
  
  
  // useEffect(() => {
  //   console.log("Hello");
  // }, [
  

  function handleAddTask(text){
    setProjectsStat((prevState) => {
      const TaskId = Math.random();
      const newTask = {
          text: text,
          ProId: prevState.setProjectsId,
          id : TaskId, 
      };
      return{
      ...prevState,
      tasks: [newTask, ...prevState.tasks || []]
      }
    })
   }

   
   function handleDeleteTask(id){
    setProjectsStat(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== id),
      };
    });
   } 



   ///Yeah this a react project 

  


  function handleStartAddPro(){
    setProjectsStat(prevSate=>{
      return {
        ...prevSate,
        setProjectsId: null
      }
    });
  }


  function handleSelectProj(id){
    setProjectsStat(prevSate=>{
      return {
        ...prevSate,
        setProjectsId: id,
      }
    });
  }



   function handleCancel(){
    setProjectsStat(prevSate=>{
      return {
        ...prevSate,
        setProjectsId: undefined,
      }
    });
   }



   function handleDelete(){
    setProjectsStat(prevSate=>{
      return {
        ...prevSate,
        setProjectsId: undefined,
        projects: prevSate.projects.filter((project)=> project.id !== prevSate.setProjectsId),
      };
    });
   }


  function HandleAddProject(projectData){
    setProjectsStat(prevSate=>{
      const ProId = Math.random();
      const newPro = {
        ...projectData,
          id : ProId, 
      };
      return{
      setProjectsId: undefined,
      projects: [...prevSate.projects,newPro]
      }
    })
  }


  const selectedproject = ProjectsStat.projects.find(project=> project.id === ProjectsStat.setProjectsId)

  let content= <SelectedPro project={selectedproject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={ProjectsStat.tasks}/>;

  if(ProjectsStat.setProjectsId=== null){
   content = <NewProject onAdd={HandleAddProject} onCancel={handleCancel}/>
  }
  else if(ProjectsStat.setProjectsId===undefined){
    content = <NoProSelect onstartAddProject={handleStartAddPro}/>
  }
    
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProSideBar 
      onSelectProj ={handleSelectProj}
      onstartAddProject={handleStartAddPro} projects={ProjectsStat.projects} selectedProId={ProjectsStat.selectedProId}/>
    {content}
    </main>
  )
}