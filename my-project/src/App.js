import React,{useState} from "react"
import ProSideBar from "./components/ProSideBar"
import NoProSelect from "./components/NoProSelect"
import NewProject from "./components/NewProject";



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



  let content;
  if(ProjectsStat.setProjectsId=== null){
   content = <NewProject onAdd={HandleAddProject} onCancel={handleCancel}/>
  }
  else if(ProjectsStat.setProjectsId===undefined){
    content = <NoProSelect onstartAddProject={handleStartAddPro}/>
  }
    
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProSideBar onstartAddProject={handleStartAddPro} projects={ProjectsStat.projects}/>
    {content}
    </main>
  )
}