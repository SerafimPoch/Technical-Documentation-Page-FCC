import React from "react";
import { IntroSection } from "./style";

export default () => {
  return (
    <IntroSection id="#introduction">
      <header>Introduction</header>
      <article>
        <p>
          JavaScript is a cross-platform, object-oriented scripting language. It
          is a small and lightweight language. Inside a host environment (for
          example, a web browser), JavaScript can be connected to the objects of
          its environment to provide programmatic control over them.
        </p>
        <p>
          In contrast to Java's compile-time system of classes built by
          declarations, JavaScript supports a runtime system based on a small
          number of data types representing numeric, Boolean, and string values.
          JavaScript has a prototype-based object model instead of the more
          common class-based object model. The prototype-based model provides
          dynamic inheritance; that is, what is inherited can vary for
          individual objects. JavaScript also supports functions without any
          special declarative requirements. Functions can be properties of
          objects, executing as loosely typed methods.
        </p>
        <li>
          Client-side JavaScript extends the core language by supplying objects
          to control a browser and its Document Object Model (DOM). For example,
          client-side extensions allow an application to place elements on an
          HTML form and respond to user events such as mouse clicks, form input,
          and page navigation.
        </li>
        <li>
          Server-side JavaScript extends the core language by supplying objects
          relevant to running JavaScript on a server. For example, server-side
          extensions allow an application to communicate with a database,
          provide continuity of information from one invocation to another of
          the application, or perform file manipulations on a server.
        </li>
      </article>
    </IntroSection>
  );
};
