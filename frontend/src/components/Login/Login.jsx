import { useRef, useState } from "react";
import { post } from "../../plugins/http";
import { useNavigate } from "react-router-dom";
import * as S from "../Register/Register.styled";
import { useEffect } from "react";

const Login = () => {
  const nav = useNavigate();
  const [loginMessage, setLoginMessage] = useState([]);
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const { res, status } = await post("login", user);

    if (status === 200) {
      setLoginMessage(res.msg);
      return nav("/shopPage");
    } else {
      setLoginMessage(res.msg);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoginMessage(""), 4000);
    return () => clearTimeout(timer);
  }, [loginMessage]);

  return (
    <S.RegisterAndLoginWrapper>
      <h2>Log In</h2>
      <label htmlFor="">Email</label>
      <input ref={emailRef} type="text" placeholder="Email" />
      <label htmlFor="">Password</label>
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={login}>Login</button>
      <S.ErrorMsg>{loginMessage}</S.ErrorMsg>
      <S.SignUpButton onClick={() => nav("/register")}>
        Need an account? <span>SIGN UP</span>
      </S.SignUpButton>
    </S.RegisterAndLoginWrapper>
  );
};

export default Login;
