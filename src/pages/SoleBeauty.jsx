import React from 'react';
import sbWeb from '../assets/portfolioPagesContent/sole/img/website/small/sb-small-01.jpg';
import sbMob from '../assets/portfolioPagesContent/sole/img/website/small/sb-small-02.jpg';
import salonPage from '../assets/portfolioPagesContent/sole/img/website/small/salon-page-streatham.png';
import giveaway01 from '../assets/portfolioPagesContent/sole/img/insta/small/giveaway.png';
import giveaway02 from '../assets/portfolioPagesContent/sole/img/insta/small/giveaway-2.png';
import summerOffer from '../assets/portfolioPagesContent/sole/img/insta/small/summer-offer-01.jpg';
import wax01 from '../assets/portfolioPagesContent/sole/img/vectors/waxing-combo-stories-s-01.png';
import wax02 from '../assets/portfolioPagesContent/sole/img/vectors/waxing-combo-stories-s-2.png';

function Sole(){
  return(
    <>
    <div className="container" id="sole-beauty-container">
      <div className="row">  

        <h1>Sole Beauty</h1>

        <p>Worked as a Web Designer/Developer and Head of the marketing team of Sole Beauty. During this time, I supervised 
          the marketing team on the content creation for Social Media, a blog, and creating ads and campaigns for promoting 
          new services and events.</p> 
        <p>The main goal of my work was to make the website faster and easier to be ranked on Google search tools (SEO friendly) 
          which helped to reach new customers and increase the page views numbers. To reach this outcome it was needed to redesign 
          the website and make it responsive on a range of screen sizes.</p>
        <p>On the homepage, for instance, a heavy slide animation was replaced by a static image to help it to open smoothly and 
          reduce the load on mobile. A concise section summarising the main treatments offered was added. 
          To simplify the user experience, the customers have the option to book through a booking button or choose one of the 
          salon's pictures and book directly by location. Furthermore, a special offers page, an Instagram feed, Twitter, and 
          social media links were added.</p>
        <p>Moreover, on each page was added booking buttons, each salon owns pages, and a blog was created. Also, created images 
          explaining the difference between each waxing type to direct the customers to the correct option, thus avoiding unnecessary 
          calls or postponing the booking because they weren't sure about the waxing type selected.</p>
        <p>To make it responsive I removed unnecessary content from the mobile version, focusing on the most important information. 
          The booking button was always visible on the scroll, responsive menu, Instagram feed, Twitter, one-click WhatsApp message, 
          and social media links.</p>
        
      </div>

      <div className="container sb-imgs">
        <div className="row">
          <div className="col-12 col-sm-6">
            <figure>
              <img src={sbWeb} className="img-fluid" alt="New Sole Beauty Webpage"/>
              <figcaption>Homepage</figcaption>
            </figure>
          </div>

          <div className="col-12 col-sm-6">
            <figure>
              <img src={sbMob} className="img-fluid" alt="New Sole Beauty Webpage"/>
              <figcaption>Mobile</figcaption>
            </figure>
            <figure>
              <img src={salonPage} className="img-fluid" alt="New Sole Beauty Webpage"/>
              <figcaption>Salon's Page</figcaption>
            </figure>
          </div>         
        </div>
      </div>

      <div className="row" height="450px">
        <h3>Before/After</h3>
        <div className="col-12 col-sm-6">
          <iframe src="https://www.youtube.com/embed/8YG7vzJPaNE?controls=0" 
                  title="YouTube video player" frameborder="0" 
                  width="100%"
                  height="350px"
                  allowfullscreen></iframe>
        </div>
        <div className="col-12 col-sm-6">
          <iframe src="https://www.youtube.com/embed/u52Plc3lBXg?controls=0" 
                  title="YouTube video player" frameborder="0" 
                  width="100%"
                  height="350px"
                  allowfullscreen></iframe>
        </div>
      </div>

      <div className="container">
        <h3>Digital design, Ads and Social Media  </h3>
        <p>Below, follows some examples of the marketing and design works that I've done for the company.</p>

        <div className="row">
          <div className="col-12 col-sm-4">
            <iframe src="https://www.youtube.com/embed/BV5wRJzSJgk" 
                    title="YouTube video player" frameborder="0" 
                    height="50%"
                    width="100%"
                    allowfullscreen>
            </iframe>
            <figure>
              <img src={giveaway02} className="img-fluid" alt="Summer Offer ad"/>
            </figure>
          </div>

          <div className="col-12 col-sm-5">
            <figure>
              <img src={summerOffer} className="img-fluid" alt="Giveaway ad"/>
            </figure>
            <figure>
              <img src={giveaway01} className="img-fluid" alt="Another giveaway ad"/>
            </figure>
          </div>    

          <div className="col-12 col-sm-3">
            <figure>
              <img src={wax01} className="img-fluid" alt="Giveaway ad"/>
            </figure>
            <figure>
              <img src={wax02} className="img-fluid" alt="Another giveaway ad"/>
            </figure>
          </div>       
        </div>

      </div>
    </div>
    </>
  )
}

export default Sole