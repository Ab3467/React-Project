import React,{useState} from "react"
import ProSideBar from "./components/ProSideBar"
import NoProSelect from "./components/NoProSelect"
import NewProject from "./components/NewProject";
import SelectedPro from "./components/SelectedPro";



export default function App() {
  const [ProjectsStat,setProjectsStat] = useState({
    setProjectsId: undefined,
    projects : [],
    tasks : [],
  });


   function handleAddTask(text){
    setProjectsStat(prevSate=>{
      const TaskId = Math.random();
      const newTask = {
          text: text,
          ProId: prevSate.setProjectsId,
          id : TaskId, 
      };
      return{
      ...prevSate,
      tasks: [newTask, ...prevSate.tasks]
      }
    })
   }

   
   function handleDeleteTask(){
    setProjectsStat(prevSate=>{
      return {
        ...prevSate,
        setProjectsId: undefined,
        projects: prevSate.projects.filter((project)=> project.id !== prevSate.setProjectsId),
      };
    });
   } 


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
      onstartAddProject={handleStartAddPro} projects={ProjectsStat.projects}/>
    {content}
    </main>
  )
}