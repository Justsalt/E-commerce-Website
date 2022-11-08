import React from "react";
import Menu from "./MenuComponents/Menu";

import * as S from "./shop.styled";

import NewPosts from "./NewPosts/NewPosts";
import { get } from "../../plugins/http";
import { useEffect } from "react";
import { useState } from "react";
import AllCategories from "./AllCategories/AllCategories";

const Shop = () => {
  const [limitedPosts, setLimitedPosts] = useState([]);
  const [allLimitedPosts, setAllLimitedPosts] = useState([]);
  const LimitedPosts = async () => {
    const { res, status } = await get("getLimitedCreatedPosts");
    setLimitedPosts(res.newPost);
    setAllLimitedPosts(res.allNewPosts);
  };
  useEffect(() => {
    LimitedPosts();
  }, []);

  return (
    <S.ShopContainer>
      <h2>Naujausi Skelbimai</h2>
      <S.ShopHeader>
        <Menu />
        <S.PostNewWrapper>
          <S.PostImagesContainer>
            {limitedPosts &&
              limitedPosts.map((item, index) => (
                <NewPosts key={index} item={item} />
              ))}
          </S.PostImagesContainer>
        </S.PostNewWrapper>
      </S.ShopHeader>
      <div>
        <h3>Visos Kategorijos</h3>
      </div>
      <AllCategories allLimitedPosts={allLimitedPosts} />
    </S.ShopContainer>
  );
};

export default Shop;
