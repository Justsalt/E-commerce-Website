import React from "react";
import CategoryBox from "./CategoryBox";
import * as S from "./PostByCategory.styled";
const PostByCategory = ({ categoryPost, page, setPage, pageCount }) => {
  function handlePreviaus() {
    setPage((p) => {
      if (Number(p) === 1) return p;
      return Number(p) - 1;
    });
  }
  function handleNext() {
    setPage((p) => {
      if (Number(p) === pageCount) return p;
      return Number(p) + 1;
    });
  }
  return (
    <S.PostByCategoryWrapper>
      {categoryPost &&
        categoryPost.map((item, index) => (
          <CategoryBox key={index} item={item} />
        ))}
      <S.PageNavigationButtons>
        <button disabled={Number(page) === 1} onClick={handlePreviaus}>
          Atgal
        </button>
        <button
          disabled={
            Number(page) === pageCount ||
            Number(page) === Number(categoryPost.length === 0)
          }
          onClick={handleNext}
        >
          Pirmyn
        </button>
        <select value={Number(page)} onChange={(e) => setPage(e.target.value)}>
          {Array(Number(pageCount))
            .fill(null)
            .map((_, index) => {
              return <option key={index}>{index + 1}</option>;
            })}
        </select>
      </S.PageNavigationButtons>
    </S.PostByCategoryWrapper>
  );
};

export default PostByCategory;
