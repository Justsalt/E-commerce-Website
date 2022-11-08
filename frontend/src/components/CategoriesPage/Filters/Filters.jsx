import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Filter.styled";

const Filters = ({ GetPostsByCategoryName, page, filterErrMsg, pageCount }) => {
  const priceOneRef = useRef();
  const priceTwoRef = useRef();
  const searchingOrOfferRef = useRef();
  const conditionRef = useRef();
  const { categoryId } = useParams();

  const FilterPosts = () => {
    const FilterData = {
      priceOne: priceOneRef.current.value ? priceOneRef.current.value : "0",
      priceTwo: priceTwoRef.current.value ? priceTwoRef.current.value : "0",
      searchingOrOffer: searchingOrOfferRef.current.value,
      condition: conditionRef.current.value,
      categoryName: categoryId,
    };

    return FilterData;
  };
  useEffect(() => {
    GetPostsByCategoryName(FilterPosts());
  }, [page]);
  useEffect(() => {
    GetPostsByCategoryName(FilterPosts());
  }, [categoryId]);

  return (
    <S.FilterWrapper>
      <S.PriceFilter>
        <h2>Kaina</h2>
        <div>
          <input ref={priceOneRef} type="number" placeholder="Nuo" />
        </div>
        <div>
          <input ref={priceTwoRef} type="number" placeholder="Iki" />
        </div>
      </S.PriceFilter>

      <S.SearchingOffer>
        <h2>Veiksmas</h2>
        <select ref={searchingOrOfferRef}>
          <option value="all">Visi</option>
          <option value="offer">Parduoda</option>
          <option value="searching">Ieško</option>
        </select>
      </S.SearchingOffer>
      <S.Condition>
        <h2>Būklė</h2>
        <select ref={conditionRef}>
          <option value="all">Visi</option>
          <option value="new">Naujas</option>
          <option value="used">Naudotas</option>
        </select>
      </S.Condition>
      <button onClick={() => GetPostsByCategoryName(FilterPosts())}>
        Filtruoti
      </button>
      <S.FindErrorMsg>{filterErrMsg}</S.FindErrorMsg>
    </S.FilterWrapper>
  );
};

export default Filters;
