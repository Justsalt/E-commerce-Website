import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PostByCategory.styled";

const CategoryBox = ({ item }) => {
  const date = item.date.slice(0, 10);
  const navigate = useNavigate();
  return (
    <S.PostBoxWrapper>
      <S.ImgWrapper onClick={() => navigate(`/userPost/${item._id}`)}>
        <img src={item.photo.photoList[0]} alt="" />
      </S.ImgWrapper>
      <div>
        <h5>Pavadinimas:{item.title}</h5>
        <h5>Aprašymas: {item.description}</h5>
        <h5>Kaina: {item.price}€</h5>
        <h5>Kondicija: {item.condition === "new" ? "Naujas" : "Naudotas"}</h5>
        <h5>
          Ieško/Parduoda:{" "}
          {item.searchingOrOffer === "searching" ? "Ieško" : "Parduoda"}
        </h5>
        <h5>Įkeltas skelbimas : {date} </h5>
      </div>
    </S.PostBoxWrapper>
  );
};

export default CategoryBox;
