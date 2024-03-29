import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/components/about/AboutPage.scss';

import MailingList from '../common/MailingList';
import HorizontalSocialButtons from '../common/HorizontalSocialButtons';

import Triangle from '../../assets/images/logos/triangle.png';
import Boxes from '../../assets/images/logos/boxes.png';

import Apollo from '../../assets/images/logos/apollo.png';
import YouMeAndTheParks from '../../assets/images/logos/youmeandtheparks.png';
// import Launch from '../../assets/images/logos/launch.png';
import ExploreHere from '../../assets/images/logos/explorehere.png';

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
                  <span className="purpleText">Coder</span> • <span className="greenText">Founder</span> • <span className="blueText">Nomad</span>
                </h3>
              </div>
            </div>
            <div className="col-12 offset-md-5 col-md-7">
              <h3 className="aboutSubBodyText">
                I design, and code full stack web & mobile, <a href="http://explorehere.app" target='_blank'>travel & outdoor apps</a>, while traveling 
                in my own van visiting & educating people on the National Parks of the world!  
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
                <a href="https://explorehere.app" target='_blank'>
                  <img src={ExploreHere} alt="ExploreHere" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <h4 className="desktopHide">ExploreHere</h4>
                <p>
                  My wife and I travel full-time in our self-built Ford Transit van, visiting National Parks, and interesting places.
                  Wherever we go, I love stopping and reading the interpretive displays which describe the geology, or plants and animals that live on the land.
                  ExploreHere puts all this information right in your pocket; with 170k interpretive and historical markers, you can learn about the world around you, wherever you are!
                  It's the perfect roadtrip companion.
                </p>
              </div>
              <div className="col-3"/>

              <div className="col-12 col-lg-6 offset-lg-3">
                <h4 className="desktopHide">Apollo Studios</h4>
                <p>
                  No idea is too big for Apollo Studios. 
                  From the first inception of an idea to the development and scaling of your web application. 
                  With our highly talented developers and designers you can let 
                  Apollo Studios handle your product development, so you can focus on acquiring customers, 
                  scaling and achieving product-market fit.   
                </p>
                {/* <h4 className="desktopHide">LAUNCH e-book</h4>
                <h5>Have an idea and don't know where to begin? </h5>
                <p>
                  Download our book LAUNCH to get started and contact Apollo Studios 
                  when you're ready to start building your app!
                </p> */}
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                {/* <a href="http://apollostu.com" target='_blank'> */}
                  <img src={Apollo} alt="Apollo Studios" className="img-responsive tabletHide"/>
                {/* </a> */}
              </div>
              {/* <div className="col-12 col-lg-3 imgContainer align-self-end">
                <a href="http://apollostu.com" target='_blank'>
                  <img src={Launch} alt="Apollo Studios" className="img-responsive tabletHide"/>
                </a>
              </div> */}
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
                  As I mentioned before, I love to travel and learn about the National Parks. 
                  YouMeAndTheParks is a site that educates and shares resources on how to explore the National Parks of the world, 
                  as well as a place to learn more about the indigenous perspective and stories on each park.
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

