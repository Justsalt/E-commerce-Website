import styled from "styled-components";
import { theme } from "../../../Theme";
export const CategoriesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* background-color: #dbd8d8; */
  width: 400px;

  li {
    font-size: 22px;
    font-weight: 600;
    list-style-type: none;
    text-transform: capitalize;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    width: fit-content;
    margin-left: -1em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.palette};
      width: fit-content;
      cursor: pointer;
    }
  }
`;
