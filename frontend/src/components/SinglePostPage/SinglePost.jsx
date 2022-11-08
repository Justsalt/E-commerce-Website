import React from "react";
import UserInformation from "./UserInfo/UserInformation";
import * as S from "./SinglePost.styled";
import CreatedPostInfo from "./CreatedPostInfo/CreatedPostInfo";

const SinglePost = ({ postPhoto, userInfo, postInfos }) => {
  return (
    <S.PostContainer>
      <CreatedPostInfo
        postPhoto={postPhoto}
        userInfo={userInfo}
        postInfos={postInfos}
      />

      <S.RightSideInformation>
        <UserInformation userInfo={userInfo} />
      </S.RightSideInformation>
    </S.PostContainer>
  );
};

export default SinglePost;
