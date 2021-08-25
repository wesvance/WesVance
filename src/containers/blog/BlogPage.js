import React from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import '../../assets/styles/components/blog/BlogPage.scss';
import * as postActions from '../../actions/postActions';
import * as categoryActions from '../../actions/categoryActions';

import Fuse from 'fuse.js'; // PROVIDES FUZZY SEARCH
import TextInput from '../common/form/TextInput';
import SkeletonBox from '../common/skeleton/SkeletonBox';
import HorizontalSocialButtons from '../common/HorizontalSocialButtons';
import Banner from '../common/Banner';
import MailingList from '../common/MailingList';
import Posts from './post/Posts';

class BlogPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      activeCategories: [],
      search: ''
    };
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  componentWillMount(){
    this.props.postActions.requestAllPosts();
    this.props.categoryActions.requestAllCategories();
  }

  setActiveCategory(category){
    if(this.state.activeCategories.includes(category)){
      // TAKE IT OUT
      this.setState({...this.state,
        activeCategories: this.state.activeCategories.filter((_category) => _category !== category)
      })
    }else{
      // PUSH IT ON
      var newCategories = this.state.activeCategories.slice();
      newCategories.push(category);
      this.setState({activeCategories:newCategories})
    }
  }
  renderCategories(categories){
    if(categories){
      return(
        <div className="categories">
          {this.filterCategoriesByCount(categories).map((category) => {
            return(
              <span key={category.id}
                className={this.state.activeCategories.includes(category)? 'category selected': 'category'}
                onClick={this.setActiveCategory.bind(null, category)}>
                {category.name}
              </span>
              )
            })
          }
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className="col-8">
            <SkeletonBox
              rows={3}
              boxHeight={'30px'}
              />
          </div>
        </div>
      )
    }
  }

  renderSocialShare(){
    return(
      <HorizontalSocialButtons
        twitterLink={'http://twitter.com/wesadvance'}
        facebookLink={'https://facebook.com/wesadvance'}
        githubLink={'https://github.com/wesvance'}
        emailLink={'mailto:me@wesvance.com?Subject=Hey Wes!'}/>
    )
  }

  filterCategoriesByCount(categories){
    if(categories){
      return categories.filter((_category, index) => _category.count > 0).splice(0, 5)
    }
  }

  filterPostsByActiveCategory(posts, activeCategories){
    if(posts && activeCategories){
      // let activeCategoriesIDArray = activeCategories.map(category => {return category.id})
      // let filteredPosts = posts.map(post => {
      //   if(post._embedded && post._embedded['wp:term']){
      //     let postCategories = post._embedded['wp:term'][0];
      //     return postCategories.filter(category => {return category.id === activeCategories[0]})
      //   }
      // })
      // debugger
      // RETURN POSTS WHERE THE POSTS CATEGORIES MATCH ALL THE ACTIVE CATEGORIES

      return posts
    }else{
      return posts
    }
  }

  filterPostsByFuseSearch(posts, search){
    if(posts && search){
      var options = {
        shouldSort: true,
        threshold: 0.7,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        keys: [
          "title.rendered"
        ]
      };
      var fuse = new Fuse(posts, options); // "list" is the item array
      var result = fuse.search(search);
      return result
    }else{
      return posts
    }
  }

  renderPosts(posts, search, activeCategories){
    return(
      this.filterPostsByActiveCategory(
        this.filterPostsByFuseSearch(
          posts,
          search),
        activeCategories
      )
    )
  }

  setSearch(e){
    this.setState({search: e.target.value})
  }

  render(){
    return(
      <div id="BlogPage">
        <Banner
          topLine={'BUSINESS,'}
          bottomLine={'CODE & DESIGN'}
          subtitle={'Weekly'}
          icon={'fa fa-paper-plane-o'}
          />

        <div className="blogContainer">
          <div className="container">
            <div className="row">
              <div className="col">
                 <p>This blog sits at the intersection in the 'magic triangle' of buiness, code and design.
                These articles highlight the harmony and synergy of this intersection</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <Posts posts={
                  this.renderPosts(
                    this.props.posts,
                    this.state.search,
                    this.state.activeCategories)
                }/>
              </div>
              <div className="col-md-4 mobileHide">
                <TextInput
                  type={'text'}
                  name={'searchPosts'}
                  placeholder={'Search Posts...'}
                  value={this.state.search}
                  onChange={this.setSearch}
                  autoComplete={false}
                />

                <h4>Categories</h4>
                {this.renderCategories(this.props.categories.allCategories)}

                <h4>Follow Me!</h4>
                {this.renderSocialShare()}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-9 offset-md-2 offset-lg-3">
              <MailingList
                header={'Love these articles? I bet you’d love more!'}
                body={"Helpful, awesome and spam-less articles right to your inbox, every Wednesday - Just for subscribers."}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="pageCircle">
//  <Link to="/posts">
//    <div className="button">
//      <i className="fa fa-rss"></i>
//    </div>
//  </Link>
// </div>
function mapStateToProps(state, ownProps){
  return {
    ui: state.ui,
    posts: state.posts.allPosts,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch){
  return{
    postActions: bindActionCreators(postActions, dispatch),
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);

