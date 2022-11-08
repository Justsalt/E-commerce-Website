import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import { get } from "../../../plugins/http";
import * as S from "../ActiveUserPosts.styled";

const ActivePostBox = ({ item, index, userPost }) => {
  const { userPosts } = useContext(MainContext);
  const navigate = useNavigate();
  const DeletePost = async () => {
    const postId = item._id;
    await get(`deletePost/${postId}`);
    userPosts();
    if (userPost.length === 0) {
    }
  };

  return (
    <div>
      <S.ActivePostWrapper>
        <S.PhotoWrapper onClick={() => navigate(`/userPost/${item._id}`)}>
          {item.photo.photoList.map((photo, index) => (
            <S.PostPhotos key={index}>
              <img src={photo} alt="" />
            </S.PostPhotos>
          ))}
        </S.PhotoWrapper>
        <S.PostInfoWrapper>
          <S.PostInfo>
            <div>Skelbimo antraštė:</div>
            <span> {item.title}</span>
            <div>Kategorija</div>
            <span>{item.category}</span>
            <div>Būklė:</div>
            <span>{item.condition}</span>
            <div>Kaina: </div>
            <span>{item.price}€</span>
            <div>Veiksmas:</div>
            <span>{item.searchingOrOffer}</span>
            <div>Aprašymas:</div>
            <span>{item.description}</span>
          </S.PostInfo>
          <S.PostButtons>
            <button onClick={DeletePost}>Ištrinti</button>
            <button
              onClick={() => navigate(`/userPostEdit/${item._id}/${index}`)}
            >
              Redaguoti
            </button>

            <button onClick={() => navigate("/postAdd")}>Grįžti Atgal</button>
          </S.PostButtons>
        </S.PostInfoWrapper>
      </S.ActivePostWrapper>
    </div>
  );
};

export default ActivePostBox;
