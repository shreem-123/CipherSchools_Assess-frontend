import { useState } from "react";
import { Select } from "../templates/Select/Select";
import "../components/Prof_info.css";

export function ProfessionalInfo() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={"container-prof"}>
      <div className={"upper_row-prof"}>
        <h4>PROFESSIONAL INFORMATION</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>

      <div className={"row_container-prof"}>
        <Select
          disabled={disabled}
          title="Highest education"
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
            "Freelancing",
          ]}
        />
      </div>
      <div className={"line-prof"} />
    </div>
  );
}
