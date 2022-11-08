import React from "react";
import ActiveUserEdit from "../components/ActiveUserEditPost/ActiveUserEdit";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { PageContainer } from "../styles/Container.styled";

const ActivePostEditPage = () => {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <ActiveUserEdit />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default ActivePostEditPage;
