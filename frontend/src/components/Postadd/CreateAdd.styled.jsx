import styled from "styled-components";

export const ActiveAdds = styled.div`
  padding: 1rem;
  position: absolute;
  div {
    border-bottom: 5px solid black;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.palette};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const CreateAddWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  div {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    width: 30vw;
  }
`;
export const AddPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const CreatingAdd = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  select {
    padding: 0.6rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
  }
  label {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  input {
    padding: 0.3rem;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    border: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.palette};
      overflow: hidden;
      cursor: pointer;
    }
  }
  div {
    &:hover {
      cursor: pointer;
    }
  }
  fieldset {
    padding: 1rem 0;
    border: none;
  }
`;
export const PhotoAddWrapper = styled.span`
  label {
    margin-top: 0.5rem;
  }
  span {
    button {
      margin-left: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: none;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      font-size: 15px;
      text-align: center;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.palette};
        cursor: pointer;
      }
    }
  }
`;

export const AddPost = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.palette};
  }
`;
export const PostAddedMsg = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white}; ;
`;
export const PostAddedMsgInvalidUserProfile = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.warning};
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const FormButton = styled.button`
  margin-top: 0.5rem;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.palette};
    cursor: pointer;
  }
`;
export const PostErrorMsg = styled.span`
  color: red;
  text-align: center;
`;
