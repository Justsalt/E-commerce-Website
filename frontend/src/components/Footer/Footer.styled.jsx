import styled from "styled-components";
export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const FooterItem = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
  div {
    justify-content: space-evenly;
    ul {
      div {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
      }
      li {
        font-size: 0.9rem;
        list-style-type: none;
        text-transform: capitalize;
        text-transform: uppercase;
        width: fit-content;

        &:hover {
          color: ${({ theme }) => theme.colors.palette};

          cursor: pointer;
        }
      }
      img {
        height: 3rem;
        padding-left: -0.19rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
