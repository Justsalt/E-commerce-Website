import styled from "styled-components";
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 500px;
    width: 500px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  }
  @media (max-width: 1000px) {
    img {
      height: 300px;
      width: 300px;
    }
  }
  @media (max-width: 870px) {
    img {
      height: 300px;
      width: 300px;
    }
  }
`;

export const ProfileEdit = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.shadow.white};
  padding: 1rem;
  border-radius: 0.5rem;
  width: 500px;
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};
  label {
    font-weight: 600;
    font-size: 15px;
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
  select {
    padding: 0.5rem;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
  }
`;
export const ProfileInformation = styled.div`
  width: 20vw;
  span {
    font-weight: 100;
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 1.2vw;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const InputRadio = styled.div`
  margin-top: 0.2rem;
  input:hover {
    cursor: pointer;
  }
`;
export const InputErrorMsg = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.warning};
  font-weight: 600;
  input:hover {
    cursor: pointer;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;
export const Button = styled.div`
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  width: 60%;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2vw;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.palette};
    cursor: pointer;
  }
`;
