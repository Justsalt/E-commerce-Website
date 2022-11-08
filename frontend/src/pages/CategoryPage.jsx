import React from "react";
import Categories from "../components/CategoriesPage/Categories";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { PageContainer } from "../styles/Container.styled";

const CategoryPage = () => {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <Categories />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default CategoryPage;
