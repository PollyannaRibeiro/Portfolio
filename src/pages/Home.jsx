import React from 'react';
import styled from 'styled-components';
import cv from '../assets/img/links/cv-icon-back-transp.png';
import git from '../assets/img/links/git-icon-back-transp.png';
import linkedIn from '../assets/img/links/linkedin-icon-back-transp.png';
import DevExperience from '../components/DevExperience';
import DesignExperience from '../components/DesignExperience';


const Icon = styled.img`
  width:50px;
`;

function Home(){

  return(
    <React.Fragment>
      <div class="body-container">
        <div class="container main-wrap">
          <div className="row" > {/* main of the row */}

            <div className="col-12 col-md-5 col-lg-5" id="personal-info" >{/* first col */}
              <div>
                <h1>POLLYANNA RIBEIRO</h1>
                <h2>FRONT-END DEVELOPER</h2>
                <p>HTML   |   CSS   |   JS</p>
                <p>React   |   WordPress   |   Sass</p>
              </div>
            </div> {/* end of the first col */}

            <div className="col-12 col-md-7 col-lg-7" id="about"> {/* second col */}
           
              <p>When I moved to London, I decided to create a blog in WordPress to describe my experiences. 
                I had no goal in getting views or monetize, it was just an exercise, a new chapter was being 
                written in my life and had summarised my discoveries somewhere. </p>
              <p>Started using those online tools that provide templated styles, had something running quickly but was never happy with 
                the results. Found out that I could install plugins, and learned that there is a way to have 
                better control via something called CSS. Learned enough to have something closer to what I had 
                in mind, but to truly unlock its capabilities I would have to learn something else on top of it, HTML. 
                And to have it running as a plugin in WordPress there is another layer of abstraction, PHP.</p> 
              <p>And slowly started to build up the knowledge to have the WordPress blog like I wanted. Having a nice layout was 
                fun but it meant nothing if the content was not engaging, it needed good photos and videos, so I 
                decided to learn how to edit those in Adobe suite programs, suddenly I found myself getting deeper 
                into web technologies and content creation.</p>
              <p>Since 2018, I’ve focused on deepening my knowledge in web development, learning JavaScript, libraries 
                like Bootstrap, Materialize, JQuery, Sass, and React. During this time, I learned how to create responsive 
                web apps with ARIA accessibility, all this via online courses, blogs, and documentations.</p>
              <p>I could build a lot of things, but it was never a smooth experience, spent days on small bugs and hours 
                figuring out a copied code from the internet, was clear my gap in knowledge, then last year, I decided that 
                to become a better professional and truly understand the machinery under the hood, I needed a proper computer 
                science foundation, then started learning Data Structure and Algorithms. I'm studying SQL and databases at the current moment.
              </p>
              <p>I’m very keen to learn whatever is needed to complete the project, keeping a can-do attitude, and I’m looking for 
                new challenges to develop my skills and to become a stronger professional.</p>
              <p>Below, you can find the links for my GitHub and CodeWar pages where you can see the projects that I did during my 
                studying period, my CV, and LinkedIn pages. </p>
              <p>Thereunder, you can find some of the design projects that I worked on.</p>  
              
              <ul className="nav justify-content-end nav-menu" id="home-links">
                <li className="nav-item" key="item-linkedin"><a href="https://www.linkedin.com/in/pollyanna-ribeiro" className="nav-link"><Icon src={cv} alt="cv"/></a></li>
                <li className="nav-item" key="item-git"><a href="https://github.com/PollyannaRibeiro" className="nav-link"><Icon src={linkedIn} alt="LinkedIn link profile"/></a></li>
                <li className="nav-item" key="item-email"><a href="mailto:recpolly@gmail.com" className="nav-link"><Icon src={git} alt="Git link"/></a></li>
              </ul>

            </div>{/* end of the second col */}
          </div> {/* end of the row */}
          <DevExperience />
          <DesignExperience />
        </div> {/*  main-wrap  */}
      {/* < Footer /> */}
    </div> {/* < body-container  */}
    </React.Fragment>
  );
}

export default Home