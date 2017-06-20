import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/components/error/Error404Page.scss';

import LostAstronaut from '../../assets/images/logos/lostastronaut.png';
import Earth from '../../assets/images/logos/earth.png';

class Error404Page extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render(){
    return(
      <div id="Error404Page">
        <div className="errorBackground"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Oh no! You’re <b>404</b> thousand miles away way from home… Lonely astronaut</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <img alt='404-lostAstronaut' src={LostAstronaut} className="lostAstronaut"/>
            </div>
            <div className="col-4">
              <img alt='404-missingEarth' src={Earth} className="earth"/>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Error404Page);

