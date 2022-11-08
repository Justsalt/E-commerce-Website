import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { post } from "../../plugins/http";
import * as S from "../Postadd/CreateAdd.styled";

const ActiveUserEdit = () => {
  const { id, index } = useParams();
  const { userPost, userPosts } = useContext(MainContext);
  const userPostValue = userPost && userPost[index];
  const [imgVal, setImgVal] = useState([]);
  const [radioButton, setRadioButton] = useState("");
  const [imageShow, setImageShow] = useState(false);
  const [posErrtMsg, setPostErrMsg] = useState("");

  const navigate = useNavigate("");
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

  const editUserActivePost = async () => {
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
      userId: id,
    };

    const { res } = await post("editActivePost", addData);
    setPostErrMsg(res.msg);
  };

  useEffect(() => {
    const timer = setTimeout(() => setPostErrMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [posErrtMsg]);

  useEffect(() => {
    userPosts();
  }, []);

  return (
    <S.CreateAddWrapper>
      <S.CreatingAdd>
        <h3>Redagavimas: {id} </h3>
        <label htmlFor="">Skelbimo Antraštė:</label>
        <input
          ref={addTitleRef}
          type="text"
          placeholder=""
          defaultValue={userPostValue && userPostValue.title}
        />

        <label htmlFor="">Kategorija:</label>
        <select
          ref={categoriesRef}
          name=""
          id=""
          defaultValue={userPostValue && userPostValue.category}
        >
          <option value="transport">Transportas</option>
          <option value="realEsate">Nekilnojamas Turtas</option>
          <option value="job">Darbas</option>
          <option value="houseHold">Buitis</option>
          <option value="computer">kompiuterija</option>
          <option value="machinery">Technika</option>
        </select>

        <label htmlFor="">Kaina iki:</label>
        <input
          ref={priceRef}
          type="number"
          defaultValue={userPostValue && userPostValue.price}
        />

        <S.PhotoAddWrapper style={{ display: "flex", flexDirection: "column" }}>
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
        <select
          ref={conditionRef}
          name=""
          id=""
          defaultValue={userPostValue && userPostValue.condition}
        >
          <option value="new">Naujas</option>
          <option value="used">Panaudotas</option>
        </select>
        <label htmlFor="">Aprašymas:</label>
        <input
          ref={descriptionRef}
          type="text"
          defaultValue={userPostValue && userPostValue.description}
        />
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
        <S.FormButton
          onClick={() => {
            userPosts();
            editUserActivePost();
          }}
        >
          Ikelti skelbimą
        </S.FormButton>
        <S.FormButton onClick={() => navigate("/userCreatedPosts")}>
          Atgal
        </S.FormButton>
      </S.CreatingAdd>
    </S.CreateAddWrapper>
  );
};

export default ActiveUserEdit;
