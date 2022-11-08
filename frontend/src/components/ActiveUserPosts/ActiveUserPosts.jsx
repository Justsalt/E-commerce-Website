import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import ActivePostBox from "./ActivePostBox/ActivePostBox";
import * as S from "./ActiveUserPosts.styled";

const ActivePosts = () => {
  const { userPost, userPosts } = useContext(MainContext);
  useEffect(() => {
    userPosts();
  }, []);
  return (
    <div>
      <S.PostWrapper>
        {userPost &&
          userPost.map((item, index) => (
            <ActivePostBox
              key={index}
              item={item}
              index={index}
              userPost={userPost}
            />
          ))}
      </S.PostWrapper>
    </div>
  );
};

export default ActivePosts;
