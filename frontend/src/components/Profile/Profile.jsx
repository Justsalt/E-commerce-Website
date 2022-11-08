import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { get, post } from "../../plugins/http";
import * as S from "./Profile.styled";

const Profile = () => {
  const [radioButton, setRadioButton] = useState("");
  const [userData, setUserData] = useState([]);
  const [editInfo, setEditInfo] = useState(false);
  const [inputErrMsg, setInputErrMsg] = useState("");

  const nameRef = useRef();
  const surnameRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const photoRef = useRef();

  const handleChangeRadioButtons = (e) => {
    setRadioButton(e.target.value);
  };

  const createProfile = async () => {
    const userProfile = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      phone: phoneRef.current.value,
      city: cityRef.current.value,
      privateOrUab: radioButton,
      address: addressRef.current.value,
      photo: photoRef.current.value,
    };
    const { res, status } = await post("userData", userProfile);

    if (status === 200) {
      setEditInfo((prev) => !prev);
      setUserData(res.user);
    }

    setInputErrMsg(res.msg);
  };
  const getUserProfile = async () => {
    const { res } = await get("userDataGet");
    setUserData(res.user[0]);
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setInputErrMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [inputErrMsg]);

  return (
    <S.ProfileContainer>
      <S.ProfilePhoto>
        <img src={userData.photo} alt="" />
      </S.ProfilePhoto>
      <div>
        {!editInfo && (
          <S.ProfileInformation>
            <h3>
              Vardas: <span>{userData.name}</span>
            </h3>
            <h3>
              Pavardė:
              <span>{userData.surname}</span>
            </h3>
            <h3>
              Email: <span>{userData.email}</span>
            </h3>
            <h3>
              Tel: <span>{userData.phone}</span>
            </h3>
            <h3>
              Miestas: <span>{userData.city}</span>
            </h3>
            <h3>
              Adresas: <span>{userData.address}</span>
            </h3>
            <h3>
              Asmuo: <span>{userData.privateOrUab}</span>
            </h3>

            <S.Button onClick={() => setEditInfo((prev) => !prev)}>
              Redaguoti
            </S.Button>
          </S.ProfileInformation>
        )}
        {editInfo && (
          <S.ProfileEdit>
            <label htmlFor="name">Vardas:</label>
            <input ref={nameRef} type="text" defaultValue={userData.name} />
            <label htmlFor="surname">Pavardė:</label>
            <input
              ref={surnameRef}
              type="text"
              defaultValue={userData.surname}
            />
            <label htmlFor="tel">Telefono numeris:</label>
            <input
              ref={phoneRef}
              type="number"
              defaultValue={`${userData.phone}`}
            />
            <label htmlFor="adress">Adresas:</label>
            <input
              ref={addressRef}
              type="text"
              defaultValue={userData.address}
            />

            <label htmlFor="photo">Nuotrauka:</label>
            <input ref={photoRef} type="text" defaultValue={userData.photo} />
            <label htmlFor="city">Miestas:</label>
            <select ref={cityRef} name="city" id="">
              <option value="Vilnius">Vilnius</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Druskininkai">Druskininkai</option>
              <option value="Alytus">Alytus</option>
              <option value="klaipeda">Klaipėda</option>
            </select>
            <S.InputRadio>
              <label htmlFor="privatePerson"> Privatus asmuo</label>
              <input
                type="radio"
                value="privatePerson"
                name="myGroupName"
                id="privatePerson"
                onChange={handleChangeRadioButtons}
              />
              <label htmlFor="uab">Įmonė </label>
              <input
                type="radio"
                value="uab"
                name="myGroupName"
                id="uab"
                onChange={handleChangeRadioButtons}
              />
            </S.InputRadio>
            <S.InputErrorMsg>{inputErrMsg}</S.InputErrorMsg>
            <S.ButtonsWrapper>
              <S.Button onClick={createProfile}>išsaugoti</S.Button>
              <S.Button onClick={() => setEditInfo((prev) => !prev)}>
                Atšaukti
              </S.Button>
            </S.ButtonsWrapper>
          </S.ProfileEdit>
        )}
      </div>
    </S.ProfileContainer>
  );
};

export default Profile;
