import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

 
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(enteredTask);
    setEnteredTask("");
  }


  return (
    <form className="flex item-center gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={(e)=> setEnteredTask(e.target.value)}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        type="submit"
      >
        Add task
      </button>
    </form>
  );
}
