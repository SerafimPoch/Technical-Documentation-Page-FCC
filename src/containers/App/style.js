import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;
  }
`;
