import styled from "styled-components";
export const PostByCategoryWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export const PostBoxWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  display: flex;
  align-items: center;
  div {
    word-break: break-all;

    align-items: flex-start;
    h5 {
      span {
        font-weight: 300;
      }
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    padding: 1rem;
  }
`;
export const ImgWrapper = styled.div`
  padding: 1rem;

  img {
    border-radius: 0.6rem;
    height: 300px;
    width: 300px;
    object-fit: cover;
    background-color: #ffffff;
    &:hover {
      cursor: pointer;
      border: 3px solid ${({ theme }) => theme.colors.palette};
      border-radius: 0.6rem;
    }
  }
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
export const PageNavigationButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0 1rem 0 1rem;
    font-size: 20px;
    margin: 1rem 0;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.palette};
    }
  }
  select {
    padding: 0.5rem 1.06rem;
    font-size: 20px;
    margin: 1rem 0;
    /* width: 70px;
    height: 40px; */
    &:hover {
      cursor: pointer;
    }
  }
`;
