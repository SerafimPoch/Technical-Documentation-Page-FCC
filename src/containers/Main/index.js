import React from "react";
import Introduction from "../../components/Main/introduction";
import WhatYouShouldKnow from "../../components/Main/what_should_you_know";
import { MainContainer } from "./style";

export default () => {
  return (
    <MainContainer>
      <Introduction />
      <WhatYouShouldKnow />
    </MainContainer>
  );
};
