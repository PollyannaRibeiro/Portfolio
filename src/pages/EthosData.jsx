import React from 'react';
import gifBanner from '../assets/portfolioPagesContent/ethos/img/Ad-banner.gif';
import wallpaper01 from '../assets/portfolioPagesContent/ethos/img/wallpaper-facebook-option1.jpg';
import wallpaper02 from '../assets/portfolioPagesContent/ethos/img/wallpaper-facebook-option2.jpg';
import adM01 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-300x250-option1.jpg';
import adM02 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-300x250-option2.jpg';
import adM03 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-300x250-option3.jpg';
import adS01 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-s-728X90-option1.jpg';
import adS02 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-s-728x90-option2.jpg';
import adS03 from '../assets/portfolioPagesContent/ethos/img/2018-ad-static-s-728x90-option3.jpg';
import pdf01 from '../assets/portfolioPagesContent/ethos/pdf/case-Ap-Barcelona.png';
import pdf02 from '../assets/portfolioPagesContent/ethos/pdf/case-OakNorth-Bank.png';
import pdf03 from '../assets/portfolioPagesContent/ethos/pdf/Optimizar-un-proceso.png';

function Ethos(){
  return(
    <>
    <div className="container" id="ethos-container">

      <div className="row">  
        <h1>Ethos</h1>
        <p>Developing advertisements and animated banners (google and social media). Creating document layout, videos, 
          marketing content layout, and email marketing (B2B).</p>
      </div>

      <div className="row">
        <div className="col-12 col-sm-4">
          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Odp1QXU81eU?controls=0" 
                  title="YouTube video player" frameborder="0" 
                  allowfullscreen>
          </iframe>

          <figure>
            <img src={wallpaper01} className="img-fluid" alt="New Sole Beauty Webpage"/>
          </figure>

          <figure>
            <img src={wallpaper02} className="img-fluid" alt="New Sole Beauty Webpage"/>
          </figure>
        </div>

        <div className="col-12 col-sm-8">
            <img src={gifBanner} width="100%" className="img-fluid" alt="New Sole Beauty Webpage"/>
            <img src={adS01} className="img-fluid" alt="New Sole Beauty Webpage"/>
            <img src={adS02} className="img-fluid" alt="New Sole Beauty Webpage"/>
            <img src={adS03} className="img-fluid" alt="New Sole Beauty Webpage"/>
          
            <div className="row">
              <div className="col-12 col-sm-4">
                <img src={adM01} className="img-fluid" alt="New Sole Beauty Webpage"/>
              </div>
              <div className="col-12 col-sm-4">
                <img src={adM02} className="img-fluid" alt="New Sole Beauty Webpage"/>
              </div>
              <div className="col-12 col-sm-4">
                <img src={adM03} className="img-fluid" alt="New Sole Beauty Webpage"/>
              </div>
            </div>
        </div>  
      </div>

      <div className="row">
        <div className="col-12 col-sm-4">
          <img src={pdf01} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
        <div className="col-12 col-sm-4">
          <img src={pdf02} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
        <div className="col-12 col-sm-4">
          <img src={pdf03} className="img-fluid" alt="New Sole Beauty Webpage"/>
        </div>
      </div>
    </div>

    </>
  )
}

export default Ethos