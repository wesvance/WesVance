import React from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/common/NavBar.scss';
import * as uiActions from '../../actions/uiActions';

class NavBar extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }

  componentWillMount(){

  }

  render(){
    return(
      <div id="NavBar">
        <div className="container">

          <div className="row">

            <div className="col-md-12">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/posts">Articles</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <li><Link to="blog" activeClassName="active">Resources</Link></li>

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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

