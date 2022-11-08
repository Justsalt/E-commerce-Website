import React from "react";
import * as S from "./AllCategories.styled";
import CategoriesBox from "./CategoriesBox";

const AllCategories = ({ allLimitedPosts }) => {
  return (
    <S.AllCategoriesWrapper>
      {allLimitedPosts &&
        allLimitedPosts.map((item, index) => (
          <CategoriesBox key={index} item={item} />
        ))}
    </S.AllCategoriesWrapper>
  );
};

export default AllCategories;
