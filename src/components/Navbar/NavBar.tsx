import './Navbar.css';
import { Logo } from "./Logo";
import { SearchBox } from "./Searchbox";
import {Bell} from "./Bell";
import { CipherPoints } from "./CipherPoints";
import { NavUser } from "./NavUser";
import { ThemeButton } from "./ThemeButton";



export function NavBar() {
    return (
      <nav className="container">
        <Logo />
        <div className="right_container">
          <SearchBox />
          <Bell />
          <NavUser />
          <CipherPoints />
          <ThemeButton />
        </div>
      </nav>
    );
  }