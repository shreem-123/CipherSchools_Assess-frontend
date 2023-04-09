import { Input } from "../templates/Input/Input";
import { useState } from "react";
import '../components/social.css'

export function Socials() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className="container-social">
      <div className="upper_row-social">
        <h4>ON THE WEB</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>

      <div className="main_row-social">
        <div className="row_container-social">
           <Input
           disabled={disabled}
           img="/social_media/linkedin.png"
           title="LinkedIn"
         />
          <Input
            disabled={disabled}
            img="/social_media/github.png"
            title="Github"
          />
          <Input
            disabled={disabled}
            img="/social_media/facebook.png"
            title="Facebook"
          />
        </div>
        <div className="row_container-social">
          <Input
            disabled={disabled}
            img="/social_media/twitter.png"
            title="Twitter"
          />
          <Input
            disabled={disabled}
            img="/social_media/instagram.png"
            title="Instagram"
          />
          <Input
            disabled={disabled}
            img="/social_media/website.png"
            title="Website"
          />
        </div>
      </div>
      <div className="line-social" />
    </div>
  );
}
