import React from "react";
import Carousel from "react-elastic-carousel";
import * as S from "../SinglePost.styled";
const CreatedPostInfo = ({ postPhoto, postInfos }) => {
  return (
    <S.LeftSidePostInfo>
      <S.ImageBox>
        <Carousel
          enableAutoPlay
          autoPlaySpeed={30500}
          style={{
            height: "100%",
            display: postPhoto.length === 1 ? "none" : "",
          }}
        >
          {postPhoto &&
            postPhoto.map((item, index) => (
              <S.PhotoListImg key={index} src={item} alt="" />
            ))}
        </Carousel>
        <S.SinglePictureWrapper
          style={{
            display: postPhoto.length === 1 ? "block" : "none",
          }}
        >
          <S.PhotoListImg src={postPhoto[0]} alt="" />
        </S.SinglePictureWrapper>
      </S.ImageBox>
      <S.PostInformation>
        <div>
          <h2>Aprašymas</h2>
          {postInfos.title}
        </div>
        <div></div>
        <h2>Ieškomas / Parduodamas</h2>
        <div>
          {postInfos.searchingOrOffer === "searching" ? "Ieškau" : "Parduodu"}
        </div>
        <div>
          <h2>Aprašymas</h2>
          {postInfos.description}
        </div>
        <div>
          <h2>Kaina</h2>
          {postInfos.price}
        </div>
        <div>
          <h2>Būklė</h2>
          {postInfos.condition === "new" ? "Naujas" : "Naudotas"}
        </div>
      </S.PostInformation>
    </S.LeftSidePostInfo>
  );
};

export default CreatedPostInfo;
