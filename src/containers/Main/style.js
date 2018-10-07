import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-left: 310px;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;
