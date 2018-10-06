import React from "react";
import { Section } from "../introduction/style";

export default () => {
  return (
    <Section id="function_declaration">
      <header>Function declarations</header>
      <article>
        <p>
          A function definition (also called a function declaration, or function
          statement) consists of the function keyword, followed by:
        </p>
        <li>The name of the function.</li>
        <li>
          A list of arguments to the function, enclosed in parentheses and
          separated by commas.
        </li>
        <li>
          The JavaScript statements that define the function, enclosed in curly
          brackets, {}.
        </li>
        <p>
          For example, the following code defines a simple function named
          square:
        </p>
        <pre>
          <code>
            <p>{`function square(number) {
  return number * number;
}`}</p>
          </code>
        </pre>
        <p>
          The function square takes one argument, called number. The function
          consists of one statement that says to return the argument of the
          function (that is, number) multiplied by itself. The return statement
          specifies the value returned by the function.
        </p>
        <pre>
          <code>
            <p>{"return number * number;"}</p>
          </code>
        </pre>
        <p>
          Primitive parameters (such as a number) are passed to functions by
          value; the value is passed to the function, but if the function
          changes the value of the parameter, this change is not reflected
          globally or in the calling function.
        </p>
      </article>
    </Section>
  );
};
