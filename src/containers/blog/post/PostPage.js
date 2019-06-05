import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/blog/post/PostPage.scss';
import * as postActions from '../../../actions/postActions';

import MailingList from '../../common/MailingList';
// import Spinner from '../../common/ReactSpinner';
import VerticalShareButtons from '../../common/VerticalShareButtons';
import HorizontalShareButtons from '../../common/HorizontalShareButtons';
import sanitizeHtml from 'sanitize-html'; //https://www.npmjs.com/package/sanitize-html
import TextInput from '../../common/form/TextInput';
import TextAreaInput from '../../common/form/TextAreaInput';
import SkeletonBox from '../../common/skeleton/SkeletonBox';

import {Helmet} from "react-helmet";

class PostPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      post:{},
      commentForm: {
        email: '',
        name: '',
        body: '',
        message: ''
      },
      selection: {
        text: '',
        popup: {
          open: false,
          top: 0,
          right: 0
        },
      }
    };
    this.displayBody = this.displayBody.bind(this);
    this.displaySocialShare = this.displaySocialShare.bind(this);
    this.displayMetaInfo = this.displayMetaInfo.bind(this);
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onHighlight = this.onHighlight.bind(this);
  }

  componentWillMount(){
    debugger
    if(!this.props.post){
      this.props.postActions.requestPost(this.props.match.params.postSlug);
      // this.props.postActions.requestAllPosts();
    }
    // debugger
    // this.props.postActions.requestPost(this.props.routeParams.postSlug);
  }

  componentWillUnmount(){
    this.props.postActions.removePost();
  }

  displayTitle(post){
    if(post){
      return(
        <h1>{post.title.rendered}</h1>
      )
    }else{
      return(
        <SkeletonBox
          rows={1}
          boxHeight={'40px'}
          rowSpace={'30px'}
          />
      )
    }
  }
  // <div className="postSpinner">
  //   <h1 className="hiddenHeaderPlaceHolder">Loading Title</h1>
  // </div>

  // =========
  // GET THE HIGHLIGHTED SECTION OF TEXT AND SAVE TO LOCAL STATE
  // =========
  onHighlight(e){
    let selection;

    if(window.getSelection){
      selection = window.getSelection();
    }else if(document.selection){
      selection = document.selection.createRange();
    }

    if(selection && selection.toString() !== ''){
      console.log("SELECTION: " + selection.toString())
      let r = window.getSelection().getRangeAt(0).getBoundingClientRect();
      // let relative = document.body.parentNode.getBoundingClientRect();
      let top = r.bottom - 80;
      let right = (r.right - 100);

      this.setState({
        selection: {
          text: selection.toString(),
          popup: {
            open: true,
            top: top,
            right: right
          },
        }
      })
    }
  }

  displaySelectionShare(selection){
    if(selection.popup.open && selection.text){
      return(
        <div className="selectionSharePopUp">
          <HorizontalShareButtons content={`${selection.text} #WesAdvance #BC&D`} top={selection.popup.top} right={50}/>
        </div>
      )
    }else{
      return(null)
    }
  }
  displayBody(post){
    if(post){
      return(
        <div className="postBody" onMouseUp={this.onHighlight} dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)}/>
      )
    }else{
      return(
        <div>
          <SkeletonBox rows={3}/>
          <SkeletonBox
            boxHeight={'190px'}
            boxWidth={'100%'}
            />
          <SkeletonBox rows={3}/>
          <SkeletonBox
            boxWidth={'20%'}
            boxHeight={'25px'}
            rowSpace={'30px'}
            />
          <SkeletonBox rows={3}/>
          <SkeletonBox
            boxWidth={'20%'}
            boxHeight={'25px'}
            rowSpace={'30px'}
            />
          <SkeletonBox rows={10}/>
          <SkeletonBox
            boxWidth={'20%'}
            boxHeight={'25px'}
            rowSpace={'30px'}
            />
          <SkeletonBox rows={3}/>
        </div>
      )
    }
  }

  displayTag(tagName, index){
    return(
      <span key={index} className="tagContainer">
        <span className="tagShadow">{tagName}</span>
      </span>
    )
  }

  displayTags(post){
    if(post){
      if(post._embedded){
        if(post._embedded['wp:term'][0]){
          return(
            <div className="tagsContainer">
              {post._embedded['wp:term'][0].map((tag, index) => this.displayTag(tag.name, index))}
            </div>
          )
        }
      }
    }else{
      return("")
    }
  }

  calculateReadingTime(text){
    var totalWords = text.trim().split(/\s+/g).length;
    var wordsPerSecond = 200 / 60;
    var totalReadingTimeSeconds = totalWords / wordsPerSecond;
    var readingTimeMinutes = Math.round(totalReadingTimeSeconds / 60);
    return(
      readingTimeMinutes
    )
  }

  displayLengthTag(post){
    if(post){
      return(
        <div className="tagsContainer">
          <span className="tag">
            <i className="fa fa-clock-o"></i> {this.calculateReadingTime(post.content.rendered)} Min
          </span>
        </div>
      )
    }else{
      return("")
    }
  }

  displaySocialShare(){
    if(this.props.post){
      return(
        <VerticalShareButtons content={this.props.post.title.rendered}/>
      )
    }else{
      // SHADOW ELEMENT
      return ""
    }
  }

  createMarkup(string) {
    return {__html: string};
  }

  displayMetaInfo(){
    if(this.props.post){
      let thisUrl = 'https://www.wesvane.com' + this.props.location.pathname
      let embedUrl = ''
      if(this.props.post._embedded){
        if(this.props.post._embedded['wp:featuredmedia']){
          embedUrl = this.props.post._embedded['wp:featuredmedia'][0].link;
        }
      }
      return(
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.post.title.rendered}</title>
          <meta name="description" content={this.props.post.title.render} />

          <link rel="canonical" href="http://wesvance.com/" />

          <meta property="og:title" content={this.props.post.title.rendered} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={thisUrl} />
          <meta property="og:image" content={embedUrl} />
          <meta property="og:description" content={sanitizeHtml(this.props.post.excerpt.rendered, {
              allowedTags: [''],
              allowedAttributes: {}
            }).substring(0,250)}
          />

          <meta name="twitter:card" value={sanitizeHtml(this.props.post.excerpt.rendered, {
              allowedTags: [''],
              allowedAttributes: {}
            }).substring(0,250)}
          />
        </Helmet>
      )
    }
  }
  displayAuthor(post){
    if(post && post._embedded && post._embedded.author){
      let author = post._embedded.author[0];
      return(
        <div className="authorSection">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-2 authorAvatar">
              <img src={author.avatar_urls['96']} className="img-circle" alt='Author Avatar'/>
            </div>
            <div className="col-12 col-sm-9 col-md-10 authorBody">
              <a href={author.url}>
                <h2>{author.name}</h2>
              </a>
              <h5>{author.description}</h5>
            </div>
          </div>
        </div>
      )
    }else{
      // SHADOW ELEMENT
      return(
        <div className="authorSection">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-2 authorAvatar">
              <SkeletonBox
                boxHeight={'80px'}
                boxWidth={'80px'}
                boxRadius={'40px'}
                />
            </div>
            <div className="col-12 col-sm-9 col-md-10 authorBody">
              <SkeletonBox
                boxWidth={'30%'}
                boxHeight={'25px'}
                rowSpace={'20px'}
                />
              <SkeletonBox rows={3}/>
            </div>
          </div>
        </div>
      )
    }
  }


  renderComment(comment){
    if(comment){
      // IF THIS COMMENT DOES NOT HAVE A PARENT, DISPLAY IT, OTHERWISE DISPLAY THE PARENT
      return(
        <div key={comment.id} className={comment.author !== 0 ? 'comment childComment' : 'comment'}>
          <div className="row">
            <div className="col-2 col-md-2">
              <img src={comment.author_avatar_urls['96']} alt='Comment Author Avatar' className="commentAuthorImage"/>
            </div>
            <div className="col-10 col-md-10">
              <a href={comment.author_url} rel='nofollow' className="commentAuthorLink">
                <h4>{comment.author_name}</h4>
              </a>
              <div className="commentBody" dangerouslySetInnerHTML={this.createMarkup(comment.content.rendered)}/>
            </div>
          </div>
        </div>
      )
    }else{
      // let parentComments = comments.filter((_comment) => {return _comment.id === comment.parent})
      // return this.displayCommentWithChildren(parentComments[0], comments)
      return(
        <div className='comment'>
          <div className="row">
            <div className="col-2 col-md-2">
              <SkeletonBox
                boxWidth={'60px'}
                boxHeight={'60px'}
                rowSpace={'20px'}
                />
            </div>
            <div className="col-10 col-md-10">
              <SkeletonBox
                boxHeight={'60px'}
                rowSpace={'20px'}
                />
              <SkeletonBox rows={3}/>
            </div>
          </div>
        </div>
      )
    }
  }

  // findChildrenComments(comment, comments){
  //   let childComments = comments.filter((_comment) => {return _comment.parent === comment.id});
  //   debugger

  //   let allChildComments = childComments.map((_newcomment) => {
  //     return this.findChildrenComments(_newcomment, comments)
  //   })
  //   debugger
  //   return allChildComments
  // }
  renderCommentOrder(currentComment, comments){
    // TAKE CURRENT COMMENT & FILTER ALL OTHER COMMENTS WHERE PARENT COMMENT IS THIS COMMENT ID.
    // state.posts.filter(post => {return post.slug === this.props.routeParams.postSlug})

    // IF THE CURRENT COMMENT IS THE PARENT THEN LOOP THROUGH EACH OF ITS CHILDREN
    if(currentComment.parent === 0){

      // let allCommentsChildren = this.findChildrenComments(currentComment, comments);

      let childComments = comments.filter((_comment) => {return _comment.parent === currentComment.id});

      // IF THE NUMBER OF CHILDREN IS > 0, THEN RETURN EACH OF THE CHILDREN
      if(childComments.length){
        childComments.unshift(currentComment);
        return childComments.map((_comment) => {return this.renderComment(_comment)});
      }else{
        return this.renderComment(currentComment);
      }
    }
  }

  // SORTS AN ARRAY BY A KEY IN THE ARRAY OBJECT
  sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  displayComments(post){
    if(post){
      if(post._embedded && post._embedded.replies){
        let comments = post._embedded.replies[0];
        // SORT COMMENTS HERE
        this.sortByKey(comments, 'date')

        return(
          <div className="commentSection">
            <div className="row">
              <div className="col-12">
                <h4>{comments.length} Comments</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="comments">
                  {comments.map((comment) => {
                    return this.renderCommentOrder(comment, comments)
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      }else{
        return null
      }
    }else{
      // SHADOW ELEMENT
      return(
        <div className="commentSection">
          <div className="row">
            <div className="col-12">
              <SkeletonBox
                boxHeight={'30px'}
                rowSpace={'10px'}
                boxWidth={'40%'}
                />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="comments">
                <div className='comment'>
                  <div className="row">
                    <div className="col-2 col-md-2">
                      <SkeletonBox
                        boxWidth={'60px'}
                        boxHeight={'60px'}
                        rowSpace={'20px'}
                        />
                    </div>
                    <div className="col-10 col-md-10">
                      <SkeletonBox
                        boxHeight={'30px'}
                        rowSpace={'5px'}
                        />
                      <SkeletonBox rows={3}/>
                    </div>
                  </div>
                </div>
                <div className='childComment comment'>
                  <div className="row">
                    <div className="col-2 col-md-2">
                      <SkeletonBox
                        boxWidth={'60px'}
                        boxHeight={'60px'}
                        rowSpace={'20px'}
                        />
                    </div>
                    <div className="col-10 col-md-10">
                      <SkeletonBox
                        boxHeight={'30px'}
                        rowSpace={'5px'}
                        />
                      <SkeletonBox rows={3}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  onChangeField(e, key) {
    const {commentForm} = this.state;

    this.setState({commentForm: { ...commentForm,
      [key]: e.target.value
    }})
  }

  displayFormErrors(){
    if(this.state.message){
      return(
        <span className="form-errors formMessage">
          {this.state.message}
        </span>
      )
    }else{
      return null
    }
  }
  displayCommentForm(post){
    if(post){
      return(
        <div className="newCommentFormSection">
          <h4>Post a Comment {this.displayFormErrors()}</h4>
          <div className="row authorInfoRow">
            <div className="col-12 col-sm-6">
              <TextInput
                type={'text'}
                name={'name'}
                placeholder={'Name'}
                value={this.state.commentForm.name}
                onChange={e => this.onChangeField(e, 'name')}/>

            </div>
            <div className="col-12 col-sm-6">
              <TextInput
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                value={this.state.commentForm.email}
                onChange={e => this.onChangeField(e, 'email')}/>
            </div>
          </div>
          <div className="row textBodyRow">
            <div className="col-12">
              <TextAreaInput
                name={'body'}
                rows={'5'}
                placeholder={'Comment'}
                value={this.state.commentForm.body}
                onChange={e => this.onChangeField(e, 'body')}/>
            </div>
          </div>
          <div className="row submitButtonRow">
            <div className="col-12">
              <button onClick={this.onSubmitComment} className="btn btn-default">Leave a Comment</button>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="newCommentFormSection">
          <div className="row">
            <div className="col-12 col-sm-6">
              <SkeletonBox
                boxWidth={'100%'}
                boxHeight={'50px'}
                rowSpace={'10px'}
                />
            </div>
            <div className="col-12 col-sm-6">
              <SkeletonBox
                boxWidth={'100%'}
                boxHeight={'50px'}
                rowSpace={'10px'}
                />
            </div>
          </div>
          <div className='row'>
            <div className="col-12">
              <SkeletonBox
                boxWidth={'100%'}
                boxHeight={'150px'}
                rowSpace={'10px'}
                />
            </div>
          </div>
          <div className='row'>
            <div className="col-12">
              <SkeletonBox
                boxWidth={'40%'}
                boxHeight={'40px'}
                rowSpace={'10px'}
                />
            </div>
          </div>
        </div>
      )
    }
  }

  clearCommentForm(){
    this.setState({
      commentForm:{
        email: null,
        name: null,
        body: null,
        message: ''
      }
    })
  }
  onSubmitComment(){
    const {commentForm} = this.state;
    const {post, postActions} = this.props;

    if(commentForm && commentForm.email && commentForm.body && commentForm.name){
      postActions.submitNewComent(post, commentForm).then(res => {
        this.setState({
          commentForm:{
            email: '',
            name: '',
            body: ''
          },
          message: 'Thanks for your comment! Wes will review and approve asap.'
        })
      }).catch(err => {
        this.setState({
          message: 'Sorry, we had trouble submitting your comment :('
        })
      })
    }else{
      this.setState({message: 'Please enter all fields'})
    }
  }

  // {this.displaySelectionShare(this.state.selection)}

  render(){
    return(
      <div id="PostPage">
        {this.displayMetaInfo()}
        <div className="postContainer">

          <div className="container">
            <div className="row">
              <div className="col-12">
                {this.displayTitle(this.props.post)}
              </div>
            </div>
          </div>

          <div className="bar">
          </div>

          <div className="container">
            <div className="postBodyContainer">
              <div className="row">
                <div className="col-12">
                  {this.displayLengthTag(this.props.post)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {this.displayBody(this.props.post)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {this.displayTags(this.props.post)}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {this.displayAuthor(this.props.post)}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-10">
                  {this.displayComments(this.props.post)}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-10">
                  {this.displayCommentForm(this.props.post)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-9 offset-md-2 offset-lg-3">
              <MailingList
                header={'Love this article? I bet you’d love more!'}
                body={"Helpful, awesome and spam-less articles right to your inbox, every Wednesday - Just for subscribers."}/>
            </div>
          </div>
        </div>
        <div className="pageCircle">
          <Link to="/posts">
            <div className="button">
              <i className="fa fa-chevron-left"></i>
            </div>
          </Link>
        </div>
        {this.displaySocialShare()}
      </div>
    );
  }
}
// http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
function mapStateToProps(state, ownProps){
  // IF YOU HAVE THE POSTS IN THE STATE USE IT, OTHERWISE USE THE CURRENTPOST LOADED FROM A NEW API CALL IN COMPONENTWILLMOUNT
  if(state.posts && state.posts.allPosts){
    return({
      post: state.posts.allPosts.filter(post => {return post.slug === ownProps.match.params.postSlug})[0]
    })
  }else{
    return({
      post: state.posts.currentPost
    })
  }
}

function mapDispatchToProps(dispatch){
  return{
    postActions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);

