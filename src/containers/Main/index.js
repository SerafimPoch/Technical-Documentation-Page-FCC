import React from "react";
import { MainContainer } from "./style";
import HelloWorld from "../../components/Main/hello_world";
import Introduction from "../../components/Main/introduction";
import JavascriptJava from "../../components/Main/javascript_java";
import WhatYouShouldKnow from "../../components/Main/what_should_you_know";

export default () => {
  return (
    <MainContainer>
      <Introduction />
      <WhatYouShouldKnow />
      <JavascriptJava />
      <HelloWorld />
    </MainContainer>
  );
};
