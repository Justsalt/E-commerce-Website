import React, { useEffect, useState } from "react";
import { get } from "../plugins/http";
import MainContext from "./MainContext";

export default function WrapperContext(props) {
  const [userPost, setUserPost] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const userPosts = async () => {
    const { res, status } = await get("userPost");

    setUserPost(res.post);
  };

  return (
    <MainContext.Provider
      value={{
        userPost,
        setUserPost,
        userPosts,
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
