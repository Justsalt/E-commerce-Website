import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./NavBar.styled";

const SearchInputBox = ({ item }) => {
  const navigate = useNavigate();
  const navigatePost = () => {
    navigate(`/category/${item.category}`);
  };

  return <S.SearchText onMouseDown={navigatePost}>{item.title}</S.SearchText>;
};

export default SearchInputBox;
