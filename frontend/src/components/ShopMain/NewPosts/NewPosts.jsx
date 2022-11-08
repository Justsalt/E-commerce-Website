import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../shop.styled";

const NewPosts = ({ item }) => {
  const navigate = useNavigate();

  return (
    <S.PostItems>
      <S.ImgWrapper onClick={() => navigate(`/userPost/${item._id}`)}>
        <img src={item.photo.photoList[0]} alt="" />
      </S.ImgWrapper>
      <div>
        <span>Antraštė:</span> {item.title}
      </div>
      <div>
        <span>Kaina:</span> {item.price}€
      </div>
    </S.PostItems>
  );
};

export default NewPosts;
