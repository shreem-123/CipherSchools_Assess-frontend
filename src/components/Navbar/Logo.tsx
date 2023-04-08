import { Link } from 'react-router-dom';
import './Logo.css'


export function Logo() {
    return (
      <Link to="/">
        <div className={"container-logo"}>
          <img src="/logo.png" />
          <h1 className={"logo_text"}>CipherSchools</h1>
        </div>
      </Link>
    );
  }