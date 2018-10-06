import React from "react";
import { MainContainer } from "./style";
import IfElse from "../../components/Main/if_else";
import Function from "../../components/Main/function";
import Constans from "../../components/Main/constans";
import Reference from "../../components/Main/reference";
import Declaring from "../../components/Main/declaring";
import Variables from "../../components/Main/variables";
import DataTypes from "../../components/Main/data_types";
import HelloWorld from "../../components/Main/hello_world";
import Introduction from "../../components/Main/introduction";
import VariableScope from "../../components/Main/variable_scope";
import JavascriptJava from "../../components/Main/javascript_java";
import WhileStatement from "../../components/Main/while_statement";
import GlobalVariables from "../../components/Main/global_variables";
import WhatYouShouldKnow from "../../components/Main/what_should_you_know";

export default () => {
  return (
    <MainContainer>
      <Introduction />
      <WhatYouShouldKnow />
      <JavascriptJava />
      <HelloWorld />
      <Variables />
      <Declaring />
      <VariableScope />
      <GlobalVariables />
      <Constans />
      <DataTypes />
      <IfElse />
      <WhileStatement />
      <Function />
      <Reference />
    </MainContainer>
  );
};
