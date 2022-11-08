import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../plugins/http";
import * as S from "./Register.styled";

const Register = () => {
  const [registerMessage, setRegisterMessage] = useState([]);
  const emailRef = useRef();
  const passwordOneRef = useRef();
  const passwordSecondRef = useRef();

  const navigate = useNavigate();

  const register = async () => {
    const user = {
      email: emailRef.current.value,
      passwordOne: passwordOneRef.current.value,
      passwordSecond: passwordSecondRef.current.value,
    };

    const { res, status } = await post("register", user);

    if (status === 200 || status === 400) {
      return setRegisterMessage(res.msg);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => setRegisterMessage(""), 5000);
    return () => clearTimeout(timer);
  }, [registerMessage]);

  return (
    <S.RegisterAndLoginWrapper>
      <h2>Registration Form</h2>
      <label htmlFor="email">Email:</label>
      <input ref={emailRef} type="text" placeholder="Email" />
      <label htmlFor="passwordOne">Password:</label>
      <input ref={passwordOneRef} type="password" placeholder="Password" />
      <label htmlFor="passwordOne">Password Repeat:</label>
      <input
        ref={passwordSecondRef}
        type="password"
        placeholder="Password Repeat"
      />
      <S.ErrorMsg>{registerMessage}</S.ErrorMsg>
      <button onClick={register}>Register</button>
      <S.LogInButton onClick={() => navigate("/")}>Login In </S.LogInButton>
    </S.RegisterAndLoginWrapper>
  );
};

export default Register;
