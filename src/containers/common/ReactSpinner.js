import React from 'react';
import {connect} from 'react-redux';
// import * as commonActions from '../../actions/commonActions';

import '../../assets/styles/components/common/Spinner.scss';
import Spinner from 'react-spinkit';

class ReactSpinner extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.isLoading = this.isLoading.bind(this);
  }

  isLoading(){
    if(this.props.loading){
      return(
        <div className="spinnerWrapper">
          <Spinner spinnerName={this.props.spinnerName} noFadeIn/>
        </div>
      )
    }else{
      return(null);
    }
  }
  render(){
    return(
      this.isLoading()
    );
  }
}

function mapStateToProps(state, ownProps){
  // debugger
  return {
    loading: ownProps.isLoading,
    spinnerName: ownProps.spinnerName || "three-bounce"
  };
}

function mapDispatchToProps(dispatch){
  return{
    // common_actions: bindActionCreators(commonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactSpinner);
