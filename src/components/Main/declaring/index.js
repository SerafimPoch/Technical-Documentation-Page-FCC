import React from "react";
import { Section } from "../introduction/style";

export default () => {
  return (
    <Section>
      <header>Declaring variables</header>
      <article>
        <p>You can declare a variable in three ways:</p>
        <p>With the keyword var. For example,</p>
        <pre>
          <code>
            <p>{"var x = 42."}</p>
          </code>
        </pre>
        <p>
          This syntax can be used to declare both local and global variables.
        </p>
        <p>By simply assigning it a value. For example,</p>
        <pre>
          <code>
            <p>{"x = 42."}</p>
          </code>
        </pre>
        <p>
          This always declares a global variable. It generates a strict
          JavaScript warning. You shouldn't use this variant.
        </p>
        <p>With the keyword let. For example,</p>
        <pre>
          <code>
            <p>{" let y = 13."}</p>
          </code>
        </pre>
        <p>
          This syntax can be used to declare a block scope local variable. See
          Variable scope below.
        </p>
      </article>
    </Section>
  );
};
