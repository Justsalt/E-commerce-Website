import styled from "styled-components";

export const ShopContainer = styled.div`
  h2,
  h3 {
    margin: 0;
    padding: 2rem 0 3rem 0;
    line-height: 30px;
    height: 25px;
    text-align: center;
  }
  @media (max-width: 1180px) {
    flex-direction: column;
    h2 {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ShopHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  title {
  }
`;

export const PostNewWrapper = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
`;

export const PostImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 1800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;

    /* flex-wrap: wrap; */
  }
`;

export const PostItems = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 220px;
    word-wrap: break-word;
    text-transform: capitalize;
    margin-top: 0.2rem;

    span {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
export const ImgWrapper = styled.div`
  height: 200px;
  width: 200px;

  &:hover {
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.palette};
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
`;
