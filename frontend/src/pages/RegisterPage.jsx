import React, { useContext } from "react";
import Register from "../components/Register/Register";

import * as S from "../styles/Container.styled";

const RegisterPage = () => {
  return (
    <S.RegisterLoginMainWrapper>
      <Register />
    </S.RegisterLoginMainWrapper>
  );
};

export default RegisterPage;
