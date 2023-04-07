import { useState } from "react";
import { Select } from "././templates/Select/Select";
import "./Prof_info.css";
import React from "react";

export function ProfessionalInfo() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={"container"}>
      <div className={"upper_row"}>
        <h4>PROFESSIONAL INFORMATION</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>

      <div className={"row_container"}>
        <Select
          disabled={disabled}
          title="Highest eduaction"
          options={[
            "Primary",
            "Secondary",
            "Higher Secondary",
            "Graduation",
            "Post Graduation",
          ]}
        />
        <Select
          disabled={disabled}
          title="What do you do currently?"
          options={[
            "Schooling",
            "College student",
            "Teaching",
            "Job",
            "freelancing",
          ]}
        />
      </div>
      <div className={"line"} />
    </div>
  );
}
