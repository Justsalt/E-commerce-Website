import React from "react";
import * as S from "../SinglePost.styled";

const UserInformation = ({ userInfo }) => {
  return (
    <S.UserInformationWrapper>
      <S.UserPhotoAndName>
        <div>
          <img src={userInfo.photo} alt="" />
        </div>
        <div>
          <h2>{userInfo.name}</h2>
        </div>
      </S.UserPhotoAndName>
      <S.ContactInformation>
        <div>
          Tel: <span>{userInfo.phone}</span>
        </div>
        <div>
          Email: <span>{userInfo.email}</span>
        </div>
        <div>
          Miestas: <span>{userInfo.city}</span>{" "}
        </div>
      </S.ContactInformation>
    </S.UserInformationWrapper>
  );
};

export default UserInformation;
