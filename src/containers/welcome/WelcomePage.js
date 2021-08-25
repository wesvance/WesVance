import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/welcome/WelcomePage.scss';
import * as uiActions from '../../actions/uiActions';

import MailingList from '../common/MailingList';

import YouMeAndTheParks from '../../assets/images/logos/youmeandtheparks-h.png';
import Apollo from '../../assets/images/logos/apollo.png';
import ExploreHere from '../../assets/images/logos/explorehere-horizontal.png';

class WelcomePage extends React.Component{
  render(){
    return(
      <div id="WelcomePage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-9 offset-md-2 offset-lg-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="welcomeTitle">
                    <h1>
                      Hi I’m <span className="redText">Wes Vance</span> a
                      <span className="purpleText"> coder</span>, 
                      <span className="greenText"> founder</span> and 
                      <span className="blueText"> digital nomad</span>
                    </h1>
                    <h3>
                      I design, and code full stack web & mobile, <a href="http://explorehere.app" target='_blank'>travel & outdoor apps</a>, while traveling 
                      in my own van visiting & educating people on the National Parks of the world!
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8 col-sm-3 mt-3">
                  <a href="https://explorehere.app" target="_blank">
                    <img src={ExploreHere} alt="ExploreHere" className="img-responsive"/>
                  </a>
                </div>
                <div className="col-8 col-sm-3">
                  <a href="http://apollostu.com" target="_blank">
                    <img src={Apollo} alt="ApolloStudios" className="img-responsive"/>
                  </a>
                </div>
                <div className="col-8 col-sm-3">
                  <a href="http://youmeandtheparks.com" target="_blank">
                    <img src={YouMeAndTheParks} alt="YouMeAndTheParks" className="img-responsive"/>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <MailingList
                    body={<h4>
                      Take a peak behind the scenes and learn how to build your own business while traveling full-time! 
                      ONE email per week with no spam, exclusive for subscribers.
                    </h4>}/>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

