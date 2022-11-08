import styled from "styled-components";
export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1700px) {
    flex-direction: column-reverse;
  }
`;
export const LeftSidePostInfo = styled.div`
  flex: 2;
  @media (max-width: 1700px) {
    flex: 1;
  }
`;
export const ImageBox = styled.div`
  padding: 2rem;
  height: 30rem;
`;
export const PhotoListImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const SinglePictureWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const PostInformation = styled.div`
  padding: 2rem;
  word-break: break-all;
  width: auto;
`;

//////////////////
export const RightSideInformation = styled.div`
  padding: 2rem;
  flex: 0.8;
  height: auto;
`;
export const UserInformationWrapper = styled.div`
  border-radius: 0.6rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1700px) {
    display: flex;
  }
`;
export const UserPhotoAndName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem;
  div {
    img {
      display: block;
      border-radius: 50%;
      width: 9rem;
      height: 9rem;
      object-fit: cover;
    }
  }
  div {
    margin: auto;
  }
  @media (max-width: 1700px) {
    flex-direction: column-reverse;
  }
`;

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 1.6rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 0.2rem;
    span {
      font-weight: 500;
    }
  }
`;
