import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./AllCategories.styled";

const CategoriesBox = ({ item }) => {
  const navigate = useNavigate();
  return (
    <S.PostBox onClick={() => navigate(`/userPost/${item._id}`)}>
      <img src={item.photo.photoList[0]} alt="" />
    </S.PostBox>
  );
};

export default CategoriesBox;
