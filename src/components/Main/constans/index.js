import React from "react";
import { Section } from "../introduction/style";

export default () => {
  return (
    <Section>
      <header>Constans</header>
      <article>
        <p>
          You can create a read-only, named constant with the const keyword. The
          syntax of a constant identifier is the same as for a variable
          identifier: it must start with a letter, underscore or dollar sign and
          can contain alphabetic, numeric, or underscore characters.
        </p>
        <pre>
          <code>
            <p>{"const PI = 3.14;"}</p>
          </code>
        </pre>
        <p>
          A constant cannot change value through assignment or be re-declared
          while the script is running. It has to be initialized to a value.
        </p>
        <p>
          The scope rules for constants are the same as those for let block
          scope variables. If the const keyword is omitted, the identifier is
          assumed to represent a variable.
        </p>
        <p>
          You cannot declare a constant with the same name as a function or
          variable in the same scope. For example:
        </p>
        <pre>
          <code>
            <p>{"// THIS WILL CAUSE AN ERROR"}</p>
            <p>{"function f() {};"}</p>
            <p>{"const f = 5;"}</p>
            <p>{"// THIS WILL CAUSE AN ERROR ALS"}</p>
            <p>{"function f() {"}</p>
            <p style={{ marginLeft: "20px" }}>{"const g = 5;"}</p>
            <p style={{ marginLeft: "20px" }}>{"var g;"}</p>
            <p style={{ marginLeft: "20px" }}>{"//statements"}</p>
            <p>{"}"}</p>
          </code>
        </pre>
        <p>
          However, object attributes are not protected, so the following
          statement is executed without problems.
        </p>
        <pre>
          <code>
            <p>{"const MY_OBJECT = {'key': 'value'};"}</p>
            <p>{"MY_OBJECT.key = 'otherValue'"}</p>
          </code>
        </pre>
      </article>
    </Section>
  );
};
