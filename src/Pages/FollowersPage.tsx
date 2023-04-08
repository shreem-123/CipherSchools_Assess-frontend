import { Followers } from "../components/Followers";
import {NavBar} from "../components/Navbar/NavBar";
import "./FollowersPage.css";

export function FollowersPage() {
  return (
    <div className={"container"}>
      <NavBar />
      <Followers />
    </div>
  );
}
