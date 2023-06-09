import { Link } from "react-router-dom";
import "./user_info.css";
import { User } from "./User";

export function UserInfo() {
  return (
    <div className={"img_container-info"}>
      <div className={"main_container-info"}>
        <User />
        <Followers />
      </div>
    </div>
  );
}

function Followers() {
  return (
    <Link to="/followers">
      <h4 className={"followers"}>9 Followers</h4>
    </Link>
  );
}
