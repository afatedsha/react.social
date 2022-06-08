import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store} />
      {/* в store хранится база данных и тут мы читаем из нее posts */}
    </div>
  )
}

export default Profile;