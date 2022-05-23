// import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  { id: 1, messege: 'Hi, how are you?', licesCount: 0 },
  { id: 2, messege: 'The furst my post', licesCount: 23 }
]

let postselement = postsData.map(p => <Post messeger={p.messege} licesCount={p.licesCount} />)

const MyPosts = () => {
  return (
    <div className={classes.postBlock}>
      <div>
        my posts
      </div>
      <div>
        new posts
      </div>
      <div className={classes.posts}>
        {postselement}
      </div>
    </div>
  );
}

export default MyPosts;