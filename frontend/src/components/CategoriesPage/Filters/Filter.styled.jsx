import styled from "styled-components";
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 14.375rem;

  button {
    max-width: 12.5rem;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    border-radius: 0.6rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9rem;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.palette};
      cursor: pointer;
    }
  }
`;

export const PriceFilter = styled.div`
  div {
    margin-top: 0.2rem;

    input {
      padding: 1rem;
      width: 200px;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export const SearchingOffer = styled.div`
  select {
    padding: 0.7rem 1rem;
    width: 7.5rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Condition = styled.div`
  select {
    padding: 0.7rem 1rem;
    width: 7.5rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const FindErrorMsg = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.warning};
`;
