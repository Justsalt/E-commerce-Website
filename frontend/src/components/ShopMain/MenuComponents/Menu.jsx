import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Menu.styled";
const Menu = () => {
  const navigate = useNavigate();

  return (
    <S.CategoriesWrapper>
      <li onClick={() => navigate("/category/allCategories")}>
        VISOS KATEGORIJOS
      </li>
      <li onClick={() => navigate("/category/transport")}>Transportas</li>
      <li onClick={() => navigate("/category/realEsate")}>
        Nekilnojamas Turtas
      </li>
      <li onClick={() => navigate("/category/job")}>Darbas</li>
      <li onClick={() => navigate("/category/houseHold")}>Buitis</li>
      <li onClick={() => navigate("/category/computer")}>Kompiuterija</li>
      <li onClick={() => navigate("/category/machinery")}>Technika</li>
    </S.CategoriesWrapper>
  );
};

export default Menu;
