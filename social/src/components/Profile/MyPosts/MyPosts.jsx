import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();
  // React.createRef() метод создания ссылки на какой-нибудь элемент из jsx

  let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = () => {
     let text = newPostElement.current.value;    // current ссылается на нативный html элемент
       props.updateNewPostText(text);
   }

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;