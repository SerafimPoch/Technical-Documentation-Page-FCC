import React from "react";
import { Section } from "../introduction/style";

export default () => {
  return (
    <Section>
      <header>Hello world</header>
      <article>
        <p>
          To get started with writing JavaScript, open the Scratchpad and write
          your first "Hello world" JavaScript code:
        </p>

        <pre>
          <code>
            <p>{"function greetMe(yourName) { "}</p>
            <p style={{ marginLeft: "10px" }}>{"alert(Hello  + yourName);"}</p>
            <p>{"}"}</p>
            <p>{"greetMe(World);"}</p>
          </code>
        </pre>
        <p>
          Select the code in the pad and hit Ctrl+R to watch it unfold in your
          browser!
        </p>
      </article>
    </Section>
  );
};
