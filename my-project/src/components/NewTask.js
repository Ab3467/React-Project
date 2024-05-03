import React,{useState} from 'react'

export default function NewTask() {
const [enteredTask,setenteredtask]= useState();

function handleChange(event){
   setenteredtask(event.target.value);
} 


  return (
    <div className='flex item-center gap-4'>
        <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} value={enteredTask}/>
        <button className='text-stone-700 hover:text-stone-950'>Add task</button>
    </div>
  )
}
