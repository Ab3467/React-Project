import React, { useRef } from "react";
import Input from "../Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef(null);
  const Title = useRef(null);
  const Description = useRef(null);
  const Duedate = useRef(null);

  function handleSaveButton(e) {
    e.preventDefault();
    const EnteredTitle = Title.current.value;
    const EnteredDes = Description.current.value;
    const EnteredDueD = Duedate.current.value;

    if (
      EnteredTitle.trim() === "" ||
      EnteredDes.trim() === "" ||
      EnteredDueD.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: EnteredTitle,
      description: EnteredDes,
      duedate: EnteredDueD,
    });

    // Clear input fields
    Title.current.value = "";
    Description.current.value = "";
    Duedate.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} btnCaption="Ok">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          OOPs... Looks like you forget to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provided a valid value for every input field
        </p>
      </Modal>

      <form className="w-[35rem] mt-16" onSubmit={handleSaveButton}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
              type="button" // Ensure button does not submit the form
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="submit" // Ensure button submits the form
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={Title} label={"Title"} />
          <Input ref={Description} label={"Description"} textarea />
          <Input type="date" ref={Duedate} label={"Due Date"} />
        </div>
      </form>
    </>
  );
}
