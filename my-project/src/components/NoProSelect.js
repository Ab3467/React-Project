import React from "react";
import Button from "./Button";
import Image from "../assets/Noimage.png";

export default function NoProSelect({ onstartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={Image}
        alt="Empty"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or start with a new one{" "}
      </p>
      <p className="mt-8">
        <Button onClick={onstartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
