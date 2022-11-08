import styled from "styled-components";

export const RegisterAndLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.shadowTen};

  label {
    margin-right: auto;
    font-size: 20px;

    font-weight: 600;
  }
  input {
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    outline: none;
    padding: 1rem;
    font-size: 20px;
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
  input:focus {
    border-bottom-color: ${({ theme }) => theme.colors.palette};
  }
  input:hover {
    cursor: pointer;
  }
  button {
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
export const LogInButton = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
  }
  margin-left: auto;
`;
export const SignUpButton = styled.div`
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  padding: 0 1rem;
  text-align: center;
`;
