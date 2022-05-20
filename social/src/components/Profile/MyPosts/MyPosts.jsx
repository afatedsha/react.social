// import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    <div>
      my posts
    </div>
    <div>
      new posts
    </div>
    <div className='posts'>
      <Post messeger='Hi, how are you?'/>
      <Post messeger='The furst my post'/>
    </div>
  </div>
}

export default MyPosts;