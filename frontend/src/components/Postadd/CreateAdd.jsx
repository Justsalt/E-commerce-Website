import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { get, post } from "../../plugins/http";
import * as S from "./CreateAdd.styled";
const CreateAdd = () => {
  const [show, setShow] = useState(false);
  const [radioButton, setRadioButton] = useState("");
  const [errorInputMsg, setErrorInputMsg] = useState("");
  const [imageShow, setImageShow] = useState(false);
  const [imgVal, setImgVal] = useState([]);
  const [posErrtMsg, setPostErrMsg] = useState("");
  const [userInfoMissingErrMsg, setUserInfoMissingErrMsg] = useState("");
  const { userPost, userPosts } = useContext(MainContext);
  const navigate = useNavigate();

  const addTitleRef = useRef();
  const categoriesRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const conditionRef = useRef();

  const handleChangeRadioButtons = (e) => {
    setRadioButton(e.target.value);
  };
  const handleAdd = () => {
    const imageArr = [...imgVal, []];
    if (imgVal.length === 4) {
      setImageShow(true);
    } else {
      setImgVal(imageArr);
    }
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...imgVal];
    inputdata[i] = onChangeValue.target.value;
    setImgVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...imgVal];
    deletVal.splice(i, 1);
    setImgVal(deletVal);
    if (imgVal.length < 5) {
      setImageShow(false);
    }
  };
  const CheckIfUserIsValid = async () => {
    const { res, status } = await get("userDataGet");
    const user = res.user[0];
    if (
      user.address &&
      user.city &&
      user.email &&
      user.name &&
      user.phone &&
      user.photo
    ) {
      setShow((prev) => !prev);
    } else {
      setUserInfoMissingErrMsg(
        "Pries Keliant Skelbimą, Užpildikite (PROFILIS) "
      );
    }
  };
  const CategoryCreate = async () => {
    const addData = {
      category: categoriesRef.current.value,
      title: addTitleRef.current.value,
      searchingOrOffer: radioButton,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      photoOne: imgVal[0],
      photoTwo: imgVal[1],
      photoThree: imgVal[2],
      photoFour: imgVal[3],
      condition: conditionRef.current.value,
    };
    const { res, status } = await post("categoryPost", addData);

    setPostErrMsg(res.msg);

    if (status === 200) {
      setShow(false);
      userPosts();
    }
  };

  useEffect(() => {
    userPosts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPostErrMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [posErrtMsg]);
  useEffect(() => {
    const timer = setTimeout(() => setUserInfoMissingErrMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [userInfoMissingErrMsg]);

  return (
    <div>
      <S.ActiveAdds
        onClick={() =>
          userPost.length === 0
            ? setUserInfoMissingErrMsg("Neturite Įkeltų Skelbimų ")
            : navigate("/userCreatedPosts")
        }
      >
        <div>Aktyvūs Skelbimai ({userPost && userPost.length})</div>
      </S.ActiveAdds>
      <S.CreateAddWrapper>
        {!show && (
          <S.AddPostContainer>
            <S.AddPost onClick={CheckIfUserIsValid}>
              <span>Įdėkite skelbimą</span>
            </S.AddPost>

            {posErrtMsg && (
              <S.PostAddedMsg>
                <span>{posErrtMsg}</span>
              </S.PostAddedMsg>
            )}
            {userInfoMissingErrMsg && (
              <S.PostAddedMsgInvalidUserProfile>
                <span>{userInfoMissingErrMsg}</span>
              </S.PostAddedMsgInvalidUserProfile>
            )}
          </S.AddPostContainer>
        )}
        {show && (
          <S.CreatingAdd>
            <h2>Skelbimas</h2>

            <label htmlFor="">Skelbimo Antraštė:</label>
            <input ref={addTitleRef} type="text" placeholder="" />
            <label htmlFor="">{errorInputMsg}</label>

            <label htmlFor="">Kategorija:</label>
            <select ref={categoriesRef} name="" id="">
              <option value="transport">Transportas</option>
              <option value="realEsate">Nekilnojamas Turtas</option>
              <option value="job">Darbas</option>
              <option value="houseHold">Buitis</option>
              <option value="computer">Kompiuterija</option>
              <option value="machinery">Technika</option>
            </select>

            <label htmlFor="">Kaina iki:</label>
            <input ref={priceRef} type="number" />

            <S.PhotoAddWrapper
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="">Nuotraukos: ( Tik Su HTTP Pradžia)</label>
              {imgVal.map((data, i) => {
                return (
                  <span key={i}>
                    <input value={data} onChange={(e) => handleChange(e, i)} />
                    <button onClick={() => handleDelete(i)}>Pašalinti</button>
                  </span>
                );
              })}
              {!imageShow && (
                <S.FormButton style={{}} onClick={() => handleAdd()}>
                  Pridėti Nuotrauka
                </S.FormButton>
              )}
            </S.PhotoAddWrapper>

            <label htmlFor="">Būklė:</label>
            <select ref={conditionRef} name="" id="">
              <option value="new">Naujas</option>
              <option value="used">Naudotas</option>
            </select>
            <label htmlFor="">Aprašymas:</label>
            <input ref={descriptionRef} type="text" />
            <fieldset>
              <label htmlFor="offer"> Siūlau</label>
              <input
                type="radio"
                value="offer"
                name="myGroupName"
                id="offer"
                onChange={handleChangeRadioButtons}
              />
              <label htmlFor="searching">Ieškau</label>
              <input
                type="radio"
                value="searching"
                name="myGroupName"
                id="searching"
                onChange={handleChangeRadioButtons}
              />
            </fieldset>
            <S.PostErrorMsg>{posErrtMsg}</S.PostErrorMsg>
            <S.PostErrorMsg>{userInfoMissingErrMsg}</S.PostErrorMsg>

            <S.FormButton
              onClick={() => {
                CategoryCreate();
                setImgVal([]);
                userPosts();
              }}
            >
              Ikelti skelbima
            </S.FormButton>
            <S.FormButton onClick={() => setShow(false)}>Atgal</S.FormButton>
          </S.CreatingAdd>
        )}{" "}
      </S.CreateAddWrapper>
    </div>
  );
};

export default CreateAdd;
