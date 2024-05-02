import React,{useState} from "react"
import ProSideBar from "./components/ProSideBar"
import NoProSelect from "./components/NoProSelect"
import NewProject from "./components/NewProject";
import SelectedPro from "./components/SelectedPro";



export default function App() {
  const [ProjectsStat,setProjectsStat] = useState({
    setProjectsId: undefined,
    projects : []
  });

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

  let content= <SelectedPro project={selectedproject}/>;
  
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