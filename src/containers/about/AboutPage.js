import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/components/about/AboutPage.scss';

import MailingList from '../common/MailingList';
import HorizontalSocialButtons from '../common/HorizontalSocialButtons';

import Triangle from '../../assets/images/logos/triangle.png';
import Boxes from '../../assets/images/logos/boxes.png';

import Apollo from '../../assets/images/logos/apollo.png';
import YouMeAndTheParks from '../../assets/images/logos/youmeandtheparks.png';
import Launch from '../../assets/images/logos/launch.png';

class AboutPage extends React.Component{
  render(){
    return(
      <div id="AboutPage">

        <img src={Triangle} alt="Triangle" className="img-responsive imageTriangle"/>
        <div className="container">

          <div className="row">
            <div className="col-12 offset-lg-6 col-lg-6">
              <div className="aboutTitleContainer">
                <h1>Hi my name is Wes!</h1>
                <h3 className="aboutSubTitle">
                  <span className="purpleText">Coder</span> • <span className="greenText">Writer</span> • <span className="blueText">Nomad</span>
                </h3>
              </div>
            </div>
            <div className="col-12 offset-md-5 col-md-7">
              <h3 className="aboutSubBodyText">
                I validate, design, code and scale innovative business web apps, 
                while traveling full time in my ford transit van, visiting and 
                educating people on the National Parks of the world!              
              </h3>
            </div>
          </div>
        </div>

        <div className="container">
          <HorizontalSocialButtons
            twitterLink={'http://twitter.com/wesadvance'}
            facebookLink={'https://facebook.com/wesadvance'}
            githubLink={'https://github.com/wesvance'}
            emailLink={'mailto:me@wesvance.com?Subject=Hey Wes!'}/>
        </div>

        <div className="container pt-5">
          <div className="activeTopics">
            <div className="row topic">
              <div className="col-12 offset-lg-3 col-lg-6">
                <h2>Things I do</h2>
              </div>
            </div>
            <div className="row topic d-flex align-items-center">
              <div className="col-12 col-lg-3 imgContainer align-self-start">
                <a href="http://apollostu.com" target='_blank'>
                  <img src={Apollo} alt="Apollo Studios" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <h4 className="desktopHide">Apollo Studios</h4>
                <p>
                  No idea is too big for Apollo Studios. 
                  From the first inception of an idea to the development and scaling of your web application. 
                  With our highly talented developers and designers you can let 
                  Apollo Studios handle your product development, so you can focus on acquiring customers, 
                  scaling and achieving product-market fit.   
                </p>
                <h4 className="desktopHide">LAUNCH e-book</h4>
                <h5>Have an idea and don't know where to begin? </h5>
                <p>
                  Download our book LAUNCH to get started and contact Apollo Studios 
                  when you're ready to start building your app!
                </p>
              </div>
              <div className="col-12 col-lg-3 imgContainer align-self-end">
                <a href="http://apollostu.com" target='_blank'>
                  <img src={Launch} alt="Apollo Studios" className="img-responsive tabletHide"/>
                </a>
              </div>
            </div>
            <div className="row topic d-flex align-items-start">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://youmeandtheparks.com" target='_blank'>
                  <img src={YouMeAndTheParks} alt="You Me And The Parks Logo" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <h4 className="desktopHide">You Me and the Parks</h4>
                <p>
                  The Earth is an incredibly interesting planet. Filled with plants, animals 
                  and places more interesting than science fiction. From the Glaciers of Kenai Fjord 
                  to the immaculate cascading lakes of the Plitvice, the National Parks of the world 
                  show the preserved and raw natural beauty of the world.
                </p>
                <p>
                  In all of their wonder and glory, there are not a lot of resources that educate 
                  and encourage people to visit and respect these natural wonders. From understanding 
                  the geological origins of the parks to the history of the indigenous people who 
                  called the parks home, You Me and the Parks is an online resource that educates and 
                  shares resources on how to explore the National Parks of the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid imageBoxContainer">
          <div className="row">
            <div className="col-12">
              <img src={Boxes} alt="BoxBreak" className="img-responsive imageBoxes"/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10">
              <MailingList
                body={`
                  Take a peak behind the scenes and learn how to run your own business 
                  while traveling full-time! ONE email per week with no spam, exclusive for subscribers.
                `}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, null)(AboutPage);

