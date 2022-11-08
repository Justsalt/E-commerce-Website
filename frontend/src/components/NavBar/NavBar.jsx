import * as S from "./NavBar.styled";
import { useLocation } from "react-router-dom";
import * as React from "react";
import { get } from "../../plugins/http";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchInputBox from "./SearchInputBox";
import { useEffect } from "react";

const NavBar = () => {
  const [postAddborderBottom, setPostAddBorderBottom] = useState("");
  const [profileborderBottom, setProfileBorderBottom] = useState("");
  const [shopPageborderBottom, setShopPageBorderBottom] = useState("");
  const [searchValue, setSearchValue] = useState("");
  let location = useLocation();
  const pathName = location.pathname.slice(1).split("/")[0];

  useEffect(() => {
    if (pathName === "postAdd") {
      return setPostAddBorderBottom("5px solid #118ab2");
    }
    if (pathName === "profile") {
      return setProfileBorderBottom("5px solid #118ab2");
    }
    if (pathName === "shopPage") {
      return setShopPageBorderBottom("5px solid #118ab2");
    }
  }, []);
  const navigate = useNavigate();
  const logOut = async () => {
    const { status } = await get("logOut");
    if (status === 200) {
      navigate("/");
    }
  };

  const searchInput = async (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
    } else {
      const { res } = await get("searchInput/" + searchValue);
      const searchInputData = res.search;
      setSearchValue(searchInputData);
    }
  };

  return (
    <S.NavBarContainer>
      <S.NavBarItems>
        <div>
          <h1
            onClick={() => navigate("/shopPage")}
            style={{ borderBottom: shopPageborderBottom }}
          >
            Vinola
          </h1>
        </div>
        <S.SearchInput>
          <input
            type="text"
            placeholder="Prekių Paieška"
            onKeyUp={searchInput}
            onBlur={() => setSearchValue("")}
            onClick={() => setSearchValue("")}
          />

          <S.SearchInputShow>
            {searchValue &&
              searchValue.map((item, index) => (
                <SearchInputBox key={index} item={item} />
              ))}
          </S.SearchInputShow>
        </S.SearchInput>

        <S.BasketProfileLogOut>
          <div
            onClick={() => navigate("/postAdd")}
            style={{ borderBottom: postAddborderBottom }}
          >
            Pridėti skelbimą
          </div>
          <div
            onClick={() => navigate("/profile")}
            style={{ borderBottom: profileborderBottom }}
          >
            Profilis
          </div>
          <div onClick={logOut}>Atsijungti</div>
        </S.BasketProfileLogOut>
      </S.NavBarItems>
    </S.NavBarContainer>
  );
};

export default NavBar;
