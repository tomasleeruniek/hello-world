import tape from "tape";
import React from "react";
import TestRenderer from "react-test-renderer";

import HelloWorld from "../src/hello-world.jsx";

tape("Hello World", t => {
  t.plan(2);

  let component = TestRenderer.create(<HelloWorld />).toJSON();

  t.equal(component.type, "span");
  t.equal(component.children, ["Hello World"]);
});
