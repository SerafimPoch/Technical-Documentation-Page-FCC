import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 320px) and (max-width: 768px) {
    height: 207px;
    border: 1px solid black;
  }
`;

export const LinkContainer = styled.div`
  border: 1px solid #4d4e53;
  padding: 10px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 7.6px;
  }
`;
