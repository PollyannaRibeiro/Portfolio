import React from "react";
import logo from '../assets/img/logo.svg';
import styled from 'styled-components';
import './Header.css';
import Projects from '../pages/projects.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Logo = styled.img`
  height:50px;
  max-height:10vh;
`;

const linkStyle = {
  color: "grey",
  fontSize: "15px"

}

function Header(){
  return(
    <>
      <div className= 'container'>
        <div className="row">

          <div className="col-6">
            <Logo src={logo} alt = "logo"/>
          </div>

          <nav className="col-6">
            <ul className="nav justify-content-end">
              <li className="nav-item"><a href="https://www.linkedin.com/in/pollyanna-ribeiro" className="nav-link" style={linkStyle} label="LinkedIn">LinkedIn</a></li>
              <li className="nav-item"><a href="https://github.com/PollyannaRibeiro" className="nav-link" style={linkStyle} label="Git">Git</a></li>
              <li className="nav-item"><a href="mailto:recpolly@gmail.com" className="nav-link" style={linkStyle} label= "Contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header