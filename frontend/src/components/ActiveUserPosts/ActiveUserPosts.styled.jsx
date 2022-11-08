import styled from "styled-components";

export const PostWrapper = styled.div``;
export const ActivePostWrapper = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.palette};
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 9.375rem 9.375rem;
  grid-template-rows: 9.375rem 9.375rem;
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  gap: 1rem;
  padding: 1rem;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.palette};
  }
`;
export const PostPhotos = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
export const PostInfoWrapper = styled.div`
  display: flex;

  width: 100%;
  span {
    word-break: break-all;
  }
`;
export const PostInfo = styled.div`
  width: 50%;
  padding: 1rem;

  flex: 1fr;
  display: flex;
  flex-direction: column;

  div {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
export const PostButtons = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 12.5rem;
    margin-top: 0.5rem;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
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
