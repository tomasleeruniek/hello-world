import tape from "tape";
import React from "react";
import TestRenderer from "react-test-renderer";

import type { Color } from "../src/types";
import HelloWorld from "../src/hello-world.jsx";

tape("is a span containing the text 'Hello World!'", t => {
  t.plan(2);

  const component = TestRenderer.create(<HelloWorld />).toJSON();

  t.equal(component.type, "span");
  t.deepEqual(component.children, ["Hello World!"]);
});

tape("changes color based on the 'color' prop", t => {
  t.plan(4);

  const noColor = TestRenderer.create(<HelloWorld />).toJSON();
  const red = TestRenderer.create(<HelloWorld color={"red"} />).toJSON();
  const green = TestRenderer.create(<HelloWorld color={"green"} />).toJSON();
  const blue = TestRenderer.create(<HelloWorld color={"blue"} />).toJSON();

  t.ok(noColor.props.className.includes("red"));
  t.ok(red.props.className.includes("red"));
  t.ok(green.props.className.includes("green"));
  t.ok(blue.props.className.includes("blue"));
});
