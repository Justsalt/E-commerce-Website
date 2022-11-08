import styled from "styled-components";

export const AllCategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const PostBox = styled.div`
  width: 250px;
  height: 200px;
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
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
