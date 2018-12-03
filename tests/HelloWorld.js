import tape from "tape";
import React from "react";
import TestRenderer from "react-test-renderer";

import HelloWorld from "../src/HelloWorld";

tape("Hello World", t => {
  t.plan(2);

  const testRenderer = TestRenderer.create(<HelloWorld />);

  t.equal(testRenderer.type, "div");
  t.equal(testRenderer.children, ["Hello World"]);
});
