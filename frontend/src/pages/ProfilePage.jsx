import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import { PageContainer } from "../styles/Container.styled";

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <Profile />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default ProfilePage;
