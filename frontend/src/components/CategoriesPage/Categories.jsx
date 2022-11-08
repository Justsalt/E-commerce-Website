import React from "react";
import * as S from "./Categories.styled";
import Filters from "./Filters/Filters";
import PostByCategory from "./PostsByCategory/PostByCategory";

import { post } from "../../plugins/http";
import { useEffect } from "react";
import { useState } from "react";

const Categories = () => {
  const [categoryPost, setCategoryPost] = useState([]);
  const [filterErrMsg, setFilteErrMsg] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const GetPostsByCategoryName = async (GetPostsByCategoryName) => {
    const { res } = await post(
      `categoryPosts?page=${page}`,
      GetPostsByCategoryName
    );
    if (res.post.length === 0) {
      setFilteErrMsg("Nėra Tokių Skelbimų");
    } else {
      setCategoryPost(res.post);
      setPageCount(Math.ceil(res.pagination.pageCount));
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => setFilteErrMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [filterErrMsg]);

  return (
    <S.CategoriesWrapper>
      <Filters
        GetPostsByCategoryName={GetPostsByCategoryName}
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        setPageCount={setPageCount}
        filterErrMsg={filterErrMsg}
      />
      <PostByCategory
        categoryPost={categoryPost}
        setPage={setPage}
        page={page}
        setPageCount={setPageCount}
        pageCount={pageCount}
      >
        Skelbimai
      </PostByCategory>
    </S.CategoriesWrapper>
  );
};

export default Categories;
