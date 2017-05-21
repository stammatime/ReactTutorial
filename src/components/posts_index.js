import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
//near identical to <a> tag
import {Link} from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component{
    componentDidMount(){
        //request to action creator fetchPosts()
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts,post => {
            return(
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    
                </li>
            )
        })
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

//you need this if you need application state in your component
function mapStateToProps(state){
    return {posts: state.posts};
}

//export default connect(null,{fetchPosts: fetchPosts})(PostsIndex);
//connect(state, action creator)(component) 
//same, using es6 syntax
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);