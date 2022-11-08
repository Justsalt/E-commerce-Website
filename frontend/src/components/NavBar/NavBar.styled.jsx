import styled from "styled-components";
export const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
`;
export const NavBarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  width: 70%;

  input {
    width: 400px;
    height: 40px;
    border-radius: 10px;
  }
  div {
    width: 100%;
    h1 {
      border-bottom: 5px solid transparent;
      width: fit-content;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export const BasketProfileLogOut = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 600;
  text-align: center;
  justify-content: space-between;
  justify-content: flex-end;
  gap: 1rem;
  &:hover {
    cursor: pointer;
  }
  div {
    border-bottom: 5px solid transparent;
    width: 100%;
    width: fit-content;
  }
  @media (max-width: 1450px) {
    font-size: 15px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const SearchInputShow = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
  border-radius: 5px;
  width: 100%;
  margin-top: 1rem;
`;
export const SearchText = styled.div`
  border-bottom: 4px solid transparent;

  color: black;
  font-size: 20px;
  padding-left: 10px;

  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    color: black;

    cursor: pointer;
    padding-left: 10px;
  }
`;
export const SearchInput = styled.div`
  width: 100%;
  position: relative;
  justify-content: center;
  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    border-bottom: 4px solid transparent;
    height: 2rem;
    padding: 2rem 0.2rem;
    font-size: 20px;

    padding-left: 1rem;
    @media (max-width: 1200px) {
      font-size: 15px;
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
