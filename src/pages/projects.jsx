import React from 'react';
import Sole from './SoleBeauty';
import Ethos from './EthosData';
import Freelas from './Freelance';

function Projects(){
  return(
    <>
    <div className="container" id="projects-container">
      <div className="row" id="projects-row">
        <h1>Projects</h1>
      </div>
      <div id="projects-content">
        <Sole />
        <Ethos />
        <Freelas />
      </div>
    </div>
    </>
  )
}

export default Projects