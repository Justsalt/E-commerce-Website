import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Shop from "../components/ShopMain/Shop";
import { PageContainer } from "../styles/Container.styled";

const ShopPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBar />
      <PageContainer>
        <Shop />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default ShopPage;
