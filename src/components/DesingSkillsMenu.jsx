import React from 'react';
import {Link} from 'react-router-dom';
import sbIcon from '../assets/img/designExpIcons/design-icons-SB.png';
import ethosIcon from '../assets/img/designExpIcons/design-icons-ethos.png';
import freelaIcon from '../assets/img/designExpIcons/design-icons-Freelas.png';
import '../assets/stylesheets/css/style.css';

function SkillsMenu(){

  return(
    <>
      <div className="content-responsive-mobile">
        <div className="row portfolio-menu">
          <img class="card-img-top" src={sbIcon} alt="Beautiful woman face to represent Sole Beauty Company"/>
          <div className="col-12 portfolio-items">
            <Link to="/solebeauty" activeClassName="selected">
              <span>Sole Beauty</span>
            </Link>
          </div>
          <div className="col-12 portfolio-items-middle">
            <Link to="/ethosdata"> 
              <span>Ethos</span>
              {/* <img class="card-img-top" src={ethosIcon} alt="Card image cap"/> */}
            </Link>
          </div>
          <div className="col-12 portfolio-items">
            <Link to="/freelance">
              <span>Other Projects</span>
              {/* <img class="card-img-top" src={freelaIcon} alt="Card image cap"/> */}
            </Link>
          </div>
        </div>
      </div>

      <div className="container content-responsive-computer">
        <div className="row cards-skill">
          <div className="col-12 col-sm-4">
            <img class="card-img-top" src={sbIcon} alt="Beautiful woman face to represent Sole Beauty Company"/>
          </div>

          <div className="col-12 col-sm-4">
            <img class="card-img-top" src={ethosIcon} alt="Corporate builds to represent Ethos Data Company"/>
          </div>

          <div className="col-12 col-sm-4">
            <img class="card-img-top" src={freelaIcon} alt="Illustration in watercolours done to represent my freelance jobs done"/>
          </div>

          <div className="row portfolio-menu">
            <div className="col-12 col-sm-4 portfolio-items">
              <Link to="/solebeauty" activeClassName="selected">Sole Beauty</Link>
            </div>
            <div className="col-12 col-sm-4 portfolio-items-middle"><Link to="/ethosdata"> Ethos</Link></div>
            <div className="col-12 col-sm-4 portfolio-items"><Link to="/freelance">Other Projects</Link></div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default SkillsMenu