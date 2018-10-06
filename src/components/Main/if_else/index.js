import React from "react";
import { Section } from "../introduction/style";

export default () => {
  return (
    <Section id="if_else_statement">
      <header>if...else statement</header>
      <article>
        <p>
          Use the if statement to execute a statement if a logical condition is
          true. Use the optional else clause to execute a statement if the
          condition is false. An if statement looks as follows:
        </p>
        <pre>
          <code>
            <p>{"if (condition) {"}</p>
            <p style={{ marginLeft: "20px" }}>{"statement_1;"}</p>
            <p>{"} else {"}</p>
            <p style={{ marginLeft: "20px" }}>{"statement_2;"}</p>
            <p>{"}"}</p>
          </code>
        </pre>
        <p>
          condition can be any expression that evaluates to true or false. See
          Boolean for an explanation of what evaluates to true and false. If
          condition evaluates to true, statement_1 is executed; otherwise,
          statement_2 is executed. statement_1 and statement_2 can be any
          statement, including further nested if statements.
        </p>
        <p>
          You may also compound the statements using else if to have multiple
          conditions tested in sequence, as follows:
        </p>
        <pre>
          <code>
            <article>
              <p>{`if (condition_1) {
    statement_1;
} else if (condition_2) {
    statement_2;
} else if (condition_n) {
    statement_n;
} else {
    statement_last;
    }
                    `}</p>
            </article>
          </code>
        </pre>
        <p>
          In the case of multiple conditions only the first logical condition
          which evaluates to true will be executed. To execute multiple
          statements, group them within a block statement () . In general, it's
          good practice to always use block statements, especially when nesting
          if statements:
        </p>
        <pre>
          <code>
            <p>{`if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}
                `}</p>
          </code>
        </pre>
        <p>
          It is advisable to not use simple assignments in a conditional
          expression, because the assignment can be confused with equality when
          glancing over the code. For example, do not use the following code:
        </p>
        <p>
          It is advisable to not use simple assignments in a conditional
          expression, because the assignment can be confused with equality when
          glancing over the code. For example, do not use the following code:
        </p>
        <pre>
          <code>
            <p>{`if (x = y) {
  /* statements here */
}`}</p>
          </code>
        </pre>
        <p>
          If you need to use an assignment in a conditional expression, a common
          practice is to put additional parentheses around the assignment. For
          example:
        </p>
        <pre>
          <code>
            <p>{`if ((x = y)) {
  /* statements here */
}`}</p>
          </code>
        </pre>
      </article>
    </Section>
  );
};
