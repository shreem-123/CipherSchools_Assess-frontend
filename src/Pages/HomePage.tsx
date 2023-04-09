import {NavBar} from "../components/Navbar/NavBar";
import {UserInfo} from "../components/User/user_info";
import {AboutMe} from '../components/AboutMe'
import {CipherMap} from '../components/CipherMap'
import {Socials} from '../components/social'
import {ProfessionalInfo} from '../components/Prof_info'
import {Password} from '../components/Password'
import {Interests} from '../components/Interests'

export function HomePage() {
  return (
    <div className="App">
    <NavBar />
    <UserInfo/>
    <AboutMe />
    <CipherMap/>
    <Socials/>
    <ProfessionalInfo/>
    <Password/>
    <Interests/>
    </div>
  );
}
