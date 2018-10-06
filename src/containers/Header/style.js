import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-right: solid;
  border-color: rgba(0, 22, 22, 0.4);
  height: 100%;
  position: fixed;
  max-width: 290px;
  left: 0px;

  @media (min-width: 320px) and (max-width: 768px) {
    max-width: 100%;
    position: inherit;
    border-right: none;
  }
`;
