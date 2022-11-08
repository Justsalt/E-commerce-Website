import React from "react";
import Login from "../components/Login/Login";
import * as S from "../styles/Container.styled";

const LoginPage = () => {
  return (
    <S.RegisterLoginMainWrapper>
      <Login />
    </S.RegisterLoginMainWrapper>
  );
};

export default LoginPage;
