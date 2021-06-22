import React from 'react';
import lc01 from '../assets/portfolioPagesContent/others/LC-responsive-computer.png';
import lc02 from '../assets/portfolioPagesContent/others/LC-responsive-phone.png';
import lc03 from '../assets/portfolioPagesContent/others/LC-blog.png';
import bRetouch from '../assets/portfolioPagesContent/others/bruna/bruna-photoshoot.png';
import bWeb01 from '../assets/portfolioPagesContent/others/bruna/b-web01.png';
import bWeb02 from '../assets/portfolioPagesContent/others/bruna/b-web02.png';
import bSandLogo from '../assets/portfolioPagesContent/others/bruna/sandboxLogo.png';

function Freelance(){
  return(
    <>
    <div className="container" id="freelance-container">

      <div className="row">  
        <h1>Freelance</h1>
        <p>Some Freelance works that I've done:</p>
      </div>

      <div className="row center" id="lc-row">
        <h3>Londres Cheguei</h3>
        <p>A responsive website built in wordpress</p>
        <div className="col-12 col-sm-5">
          <img src={lc01} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
        <div className="col-12 col-sm-3">
          <img src={lc02} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
        <div className="col-12 col-sm-4">
          <img src={lc03} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
        
      </div>

      <div className="row center">
        <h3>Sandbox</h3>
        <p>Retouch, art, video, logo, single-page website built for a fashion editorial and event.</p>
        <div className="col-12 col-sm-8">
          <img src={bRetouch} className="img-fluid" alt="New Sole Beauty Webpage"/>
          
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/60AdUkfJfUg?controls=0" 
                  width = "100%"
                  height = "400px"
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>        
          </iframe>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6">
              <img src={bSandLogo} className="img-fluid" alt="New Sole Beauty Webpage"/>
            </div>
            <div className="col-12 col-sm-6">
              <img src={bWeb02} className="img-fluid" alt="New Sole Beauty Webpage"/>
            </div>
          </div>
  
        </div>
        <div className="col-12 col-sm-4">
          <img src={bWeb01} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Freelance