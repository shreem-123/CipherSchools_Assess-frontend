import { Input } from "./templates/Input/Input";
import { useState } from "react";
import './social.css'
import React from "react";

export function Socials() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={"container"}>
      <div className={"upper_row"}>
        <h4>ON THE WEB</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>

      <div className={"main_row"}>
        <div className={"row_container"}>
          <Input
            disabled={disabled}
            img="/social media/linkedin.svg"
            title="Linkedin"
          />
          <Input
            disabled={disabled}
            img="/social media/github.svg"
            title="Github"
          />
          <Input
            disabled={disabled}
            img="/social media/facebook.svg"
            title="Facebook"
          />
        </div>
        <div className={"row_container"}>
          <Input
            disabled={disabled}
            img="/social media/twitter.svg"
            title="Twitter"
          />
          <Input
            disabled={disabled}
            img="/social media/instagram.svg"
            title="Instagram"
          />
          <Input
            disabled={disabled}
            img="/social media/website.svg"
            title="Website"
          />
        </div>
      </div>
      <div className={"line"} />
    </div>
  );
}
