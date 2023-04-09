import React from 'react';
import './AboutMe.css';
import { useState } from "react";

export function AboutMe() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={"container-about"}>
      <div className={"upper_row-about"}>
        <h4>ABOUT ME</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>
      <div className={"area_container"}>
        <textarea
          disabled={disabled}
          placeholder="Add something about you."
        ></textarea>
        {!disabled && (
          <img src={"/pencil.svg"} className={"pencil_icon"} />
        )}
      </div>
      <div className={"line-about"} />
    </div>
  );
}
