import React from "react";
import styled from 'styled-components';
import '../assets/stylesheets/css/style.css'
import {
  Link
} from "react-router-dom";

import iconHome from '../assets/img/links/icon-home.svg';
import iconProjects from '../assets/img/links/icons-projects.svg';
import iconLinkedin from '../assets/img/links/icons-linkedin.svg';
import iconCV from '../assets/img/links/icon-cv.svg';
import iconGit from '../assets/img/links/git-icon-back-transp.png';
import iconEmail from '../assets/img/links/icon-email-02.svg';

const Icon = styled.img`
  width:50px;
`;

function Footer(){
  return(
    <>
      <nav class="d-flex justify-content-center navbar row fixed-bottom navbar-light bg-light" id="mobile-footer">
          <ul className="nav nav-menu offset-1 col-10">
            <li className="nav-item" key="item-home"><Link exact to="" className="nav-link"><Icon src={iconHome} alt="Home icon"/></Link></li>
            <li className="nav-item" key="item-projects"><Link to="/projects" className="nav-link"><Icon src={iconProjects} alt="Projects Icon"/></Link></li>
            <li className="nav-item" key="item-cv"><a href="#" className="nav-link"><Icon src={iconCV} alt="CV link to a pdf file"/></a></li>
            <li className="nav-item" key="item-git"><a href="https://github.com/PollyannaRibeiro" className="nav-link"><Icon src={iconGit} alt="Git link"/></a></li>
            <li className="nav-item" key="item-linkedin"><a href="https://www.linkedin.com/in/pollyanna-ribeiro/" className="nav-link"><Icon src={iconLinkedin} alt="Git link"/></a></li>
            <li className="nav-item" key="item-email"><a href="mailto: recpolly@gmail.com" className="nav-link"><Icon src={iconEmail} alt="email link"/></a></li>
          </ul> 
        {/* <span className="col-12">&copy; Copyright 2021</span>    */}
      </nav>

      <nav>
        <div className="row justify-content-end" id="computer-footer">
          <ul className="nav nav-menu offset-md-6 col-md-6 offset-lg-7 col-lg-5 offset-8 col-xl-4">
            <li className="nav-item" key="item-home"><Link exact to="/" className="nav-link"><Icon src={iconHome} alt="Home icon"/></Link></li>
            <li className="nav-item" key="item-projects"><Link to="/projects" className="nav-link"><Icon src={iconProjects} alt="Projects Icon"/></Link></li>
            <li className="nav-item" key="item-cv"><a href="#" className="nav-link"><Icon src={iconCV} alt="CV link to a pdf file"/></a></li>
            <li className="nav-item" key="item-git"><a href="https://github.com/PollyannaRibeiro" className="nav-link"><Icon src={iconGit} alt="Git link"/></a></li>
            <li className="nav-item" key="item-linkedin"><a href="https://www.linkedin.com/in/pollyanna-ribeiro/" className="nav-link"><Icon src={iconLinkedin} alt="Git link"/></a></li>
            <li className="nav-item" key="item-email"><a href="mailto: recpolly@gmail.com" className="nav-link"><Icon src={iconEmail} alt="email link"/></a></li>
          </ul> 
          <span className="col-12" id="copyright">&copy; Copyright 2021</span>
        </div>
      </nav>
    </>
  )
}

export default Footer