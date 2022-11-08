import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import CreateAdd from "../components/Postadd/CreateAdd";
import { PageContainer } from "../styles/Container.styled";

const PostAdd = () => {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <CreateAdd />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default PostAdd;
