import React,{useState,useRef} from 'react'
import Input from '../Input'

export default function NewProject() {
const Title = useRef();
const Description = useRef();
const Duedate = useRef();



function HandleSaveButton(){
 const EnteredTitle = Title.current.value;
 const EnteredDes= Description.current.value;
 const EnteredDueD = Duedate.current.value;
}

  return (
    <>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={HandleSaveButton} value={saveBtn} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button> </li>
        </menu> 
        <div>
            <Input ref={Title} label={"Title"}/>
            <Input ref={Description} label={"Description"} textarea/>
            <Input ref={Duedate} label={"Due Date"}/>
        </div>
    </div>
    </>
  )
}
