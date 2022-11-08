import React from "react";
import ActiveUserPosts from "../components/ActiveUserPosts/ActiveUserPosts";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { PageContainer } from "../styles/Container.styled";
const ActivePostPage = () => {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <ActiveUserPosts />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default ActivePostPage;
