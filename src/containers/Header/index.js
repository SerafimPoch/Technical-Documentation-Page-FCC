import React from "react";
import { HeaderContainer } from "./style";
import Title from "../../components/Header/title";
import Navbar from "../../components/Header/navbar";

export default () => {
  return (
    <HeaderContainer>
      <Title />
      <Navbar />
    </HeaderContainer>
  );
};
