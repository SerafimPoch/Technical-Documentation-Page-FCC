import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 98%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;
