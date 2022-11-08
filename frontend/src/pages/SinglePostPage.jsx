import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SinglePost from "../components/SinglePostPage/SinglePost";
import { get } from "../plugins/http";
import { PageContainer } from "../styles/Container.styled";

const SinglePostPage = () => {
  const [postPhoto, setPostPhoto] = useState([]);
  const [postInfos, setPostInfos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const { id } = useParams();
  const getUserPostAndContacts = async () => {
    const { res, status } = await get(`singleUserPost/${id}`);

    setPostPhoto(res.post[0].photo.photoList);
    setPostInfos(res.post[0]);
    setUserInfo(res.user[0]);
  };
  useEffect(() => {
    getUserPostAndContacts();
  }, []);

  return (
    <div>
      <NavBar />
      <PageContainer>
        <SinglePost
          postPhoto={postPhoto}
          userInfo={userInfo}
          postInfos={postInfos}
        />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default SinglePostPage;
