import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import {AboutMe} from './components/AboutMe'
import {Socials} from './components/social'
import {ProfessionalInfo} from './components/Prof_info'
import {Password} from './components/Password'
import {Interests} from './components/Interests'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <AboutMe />
    <Socials/>
    <ProfessionalInfo/>
    <Password/>
    <Interests/>
    {/* <App /> */}
  </React.StrictMode>,
)
