import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/about/AboutPage.scss';
import * as uiActions from '../../actions/uiActions';

import MailingList from '../common/MailingList';
import HorizontalSocialButtons from '../common/HorizontalSocialButtons';

import Triangle from '../../assets/images/logos/triangle.png';
import Boxes from '../../assets/images/logos/boxes.png';

import Apollo from '../../assets/images/logos/apollo.png';
import FreelanceAfternoon from '../../assets/images/logos/freelanceafternoon.png';
import Launch from '../../assets/images/logos/launch.png';
import SonyAlpha from '../../assets/images/logos/sonyalpha.png';
import TechBreakfast from '../../assets/images/logos/techbreakfast.png';
import TechTrivia from '../../assets/images/logos/techtrivia.png';
import ClientPortal from '../../assets/images/logos/clientportal.png';

class AboutPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render(){
    return(
      <div id="AboutPage">

        <img src={Triangle} alt="Triangle" className="img-responsive imageTriangle"/>
        <div className="container">

          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-6">
              <div className="aboutTitleContainer">
                <h1>Hi my name is Wes!</h1>
                <h3 className="aboutSubTitle">
                  I sit at the intersection of <br/><span className="purpleText">Business</span>, <span className="greenText">Code</span> and <span className="blueText">Design</span>!
                </h3>
                <h4 className="aboutBodyText">
                  I help passionate and slightly crazy entreprenuers looking to bring their wildest ideas to life. <br/><br/>
                  If you have an idea that you’ve been sitting on for months, years, now is the time to get started! The best part, I’ll show you how, right here on the Business, Code & Deisgn blog.
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-7 offset-md-5">
              <h3 className="aboutSubBodyText">
                This intersection is a magical place where successful startups are created, products are built, and problems are solved.
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

        <div className="container">
          <div className="activeTopics">
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <h3>Some things I do</h3>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://apollostu.com" target='_blank'>
                  <img src={Apollo} alt="Apollo Studios" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <p>I love helping people build their wildest ideas so much, I built a company around it. At Apollo Studios, we build web and mobile apps for startups and small to medium sized businesses. We offer services that will help you develop your idea, design a prototype, and code a minimum viable product.</p>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p>If hiring a company to help with product development seems too intimidating, or if you want to explore the possibilities of building a product without diving in head first, then LAUNCH is for you! I wrote LAUNCH to be a complete guide to building your first app. It’s broken down into bite sized pieces that you can do over a few weekends. It’s written for people who are serious about building their idea, but don't know where to start. </p>
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                <img src={Launch} alt="Launch Book" className="img-responsive tabletHide"/>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3 imgContainer">
                <a href="http://freelanceafternoon.com" target='_blank'>
                  <img src={FreelanceAfternoon} alt="Freelance Afternoon Show" className="img-responsive tabletHide"/>
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <p>College never sat well with me, I felt like it held me back from learning things that I wanted to learn. It trains you to take a corporate job, which doesn't fit everyone. If you’re like me and are exploring ways to start a business or market yourself and a skill, then you should checkout the Freelance Afternoon Show (podcast)! Devan and myself start with the basics of going out on your own, and guide you through each step, giving tips and things to watch out for. I wish I had this before starting my business. </p>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p>On a lighter note, I host a fun Tech Trivia night on the first Tuesday of each month at Trophy Brewing- Maywood in downtown Raleigh. There is amazing free Trophy beer and a bunch of techies. If you’re in the Raleigh area on the first Tuesday of any month, stop on by and see if you can get any of the 20 questions right! </p>
              </div>
              <div className="col-12 col-lg-3 imgContainer">
                <a href="https://www.meetup.com/Triangle-tech-trivia" target='_blank'>
                  <img src={TechTrivia} alt="Triangle Tech Trivia" className="img-responsive tabletHide"/>
                </a>
              </div>
            </div>
            <div className="row topic">
              <div className="col-12 col-lg-3">
              </div>
              <div className="col-12 col-lg-6">
                <h3>Some other things I do</h3>
              </div>
              <div className="col-12 col-lg-3">
              </div>
            </div>
            <div className="row extratopics">
              <div className="col-12 col-lg-6 offset-lg-3">
                <a href="https://www.meetup.com/Triangle-TechBreakfast/" target='_blank'>
                  <img src={TechBreakfast} alt="Tech Breakfast" className="img-responsive"/>
                </a>
                <a href='https://photos.wesvance.com' target='_blank'>
                  <img src={SonyAlpha} alt="Sony Alpha Camera" className="img-responsive"/>
                </a>
                <a href="http://clients.wesvance.com" target="_blank">
                  <img src={ClientPortal} alt="Client Portal" className="img-responsive"/>
                </a>
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
                body={"Helpful, awesome, spam-less articles teaching business, code and design right to your inbox, every Wednesday - Just for subscribers."}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch){
  return{
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

