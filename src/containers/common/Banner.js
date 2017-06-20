import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/components/common/Banner.scss';

class Banner extends React.Component{
  // constructor(props, context){
  //   super(props, context);
  // }
  displayTopLine(topLine){
    return(
      <h1>{topLine}</h1>
    )
  }

  displayBottomLine(bottomLine, subtitle){
    return(
      <h1>{bottomLine} <span className="subtitle">{subtitle}</span></h1>
    )
  }

  displayIcon(icon){
    return(
      <i className={icon}></i>
    )
  }


  render(){
    return(
      <div className="BannerComponent">
        <div className="bannerBackground">
          <div className="container">
            {this.displayTopLine(this.props.topLine)}
            {this.displayBottomLine(this.props.bottomLine, this.props.subtitle)}
            {this.displayIcon(this.props.icon)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    topLine: ownProps.topLine,
    bottomLine: ownProps.bottomLine,
    subtitle: ownProps.subtitle,
    icon: ownProps.icon
  };
}

export default connect(mapStateToProps)(Banner);

