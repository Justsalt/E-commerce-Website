import styled from "styled-components";
export const PageContainer = styled.div`
  margin: auto;
  width: 70%;

  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
export const RegisterLoginMainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
