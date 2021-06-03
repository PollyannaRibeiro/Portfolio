import React from 'react';
import styled from 'styled-components';
// import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './home.css';
import Footer from '../components/Footer';
import cv from '../assets/img/links/cv-icon-back-transp.png';
import git from '../assets/img/links/git-icon-back-transp.png';
import linkedIn from '../assets/img/links/linkedin-icon-back-transp.png';
import DevExperience from '../components/DevExperience';


const Icon = styled.img`
  width:50px;
`;

function Home(){

  return(
    <React.Fragment>
      <div class="body-container">
        <div class="main-wrap">
          <div className="row" > {/* main of the row */}

            <div className="col-5" id="personal-info" >{/* first col */}
              <div>
                <h1>POLLYANNA RIBEIRO</h1>
                <h2>FRONT-END DEVELOPER</h2>
                <p>HTML   |   CSS   |   JS</p>
                <p>React   |   WordPress   |   Sass</p>
              </div>
            </div> {/* end of the first col */}

            <div className="col-7"> {/* second col */}
              <p>Curiosity, creativity, and readiness to learn are important points that make me what I am, 
                someone that is always keen to learn new technologies and isn't afraid of challenging projects.</p>
              <p>Design was my first university course, studying for 2 years, learned about product, fashion, 
                history of design, craft, sustainability and ergonomics. I had worked with e-Commerce and digital 
                market for some time. Also did retouching works, digital design, and animated advertisement to social media.</p>
              <p>Some years ago, I started to study HTML and CSS to create a blog page. Learned the basics of PHP, 
                concepts of custom themes for WordPress, and what was needed to keep it running.</p>
              <p>Since 2018, I’ve focused on deepening my knowledge in web development, learning JavaScript, libraries 
                like Bootstrap, Materialize, JQuery, Sass, and React. During this time, learned how to create responsive 
                web apps with ARIA accessibility.</p>
              <p>Since last year, I'm investing my time learning the computer science foundation concepts, studying Data 
                Structure and Algorithms focusing on real-life projects. Currently, I’m studying backend to become a full-stack 
                web developer.</p>
              <p>Below, you can find the links for my GitHub and CodeWar pages where you can see the projects that I did during my 
                studying period, my CV, and LinkedIn pages. </p>
              <p>Thereunder, you can find some of the design projects that I worked on.</p>  

              <ul className="nav justify-content-end nav-menu">
                <li className="nav-item" key="item-linkedin"><a href="https://www.linkedin.com/in/pollyanna-ribeiro" className="nav-link"><Icon src={cv} alt="cv"/></a></li>
                <li className="nav-item" key="item-git"><a href="https://github.com/PollyannaRibeiro" className="nav-link"><Icon src={linkedIn} alt="LinkedIn link profile"/></a></li>
                <li className="nav-item" key="item-email"><a href="mailto:recpolly@gmail.com" className="nav-link"><Icon src={git} alt="Git link"/></a></li>
              </ul>

            </div>{/* end of the second col */}
          </div> {/* end of the row */}
          <DevExperience />
        </div> {/*  main-wrap  */}
      < Footer />
    </div> {/* < body-container  */}
    </React.Fragment>
  );
}

export default Home