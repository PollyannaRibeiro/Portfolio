import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SkillsMenu from '../components/DesingSkillsMenu';
import SoleBeauty from '../pages/SoleBeauty';
import EthosData from '../pages/EthosData';
import Freelas from '../pages/Freelance';

function DesignExperience(){
  return(
    <>
      <div className="container" id="design-projects"> {/* container */}
        <h1>Design Experience</h1>
        <p>I have experience in creating responsive and accessible websites (HTML, CSS, JS, React, Bootstrap, and Aria), 
          supporting/maintaining WordPress and Wix websites. Creating advertisement material for social media, google ads, 
          including animated content, retouching, and video edition.</p>
        <p>Below, you can find some works that I've done.</p>
        
        <div>
          {/* Skills Menu */}
          <Router>
            <SkillsMenu/>
            <Switch>
              <Route path="/solebeauty"><SoleBeauty/></Route>
              <Route path="/ethosdata"><EthosData/></Route>
              <Route path="/freelance"><Freelas/></Route>
            </Switch>
          </Router>
        </div>
      </div> {/* end of container */}
    </>
  )
}

export default DesignExperience