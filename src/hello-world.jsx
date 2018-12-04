import React from "react";
import classnames from "classnames";

import type { Color } from "./types";
import "./hello-world.css";

type Props = {
  color?: Color
};

const HelloWorld = React.memo(({ color = "red" }) => (
  <span styleName={classnames("hello-world", color)}>Hello World!</span>
));

export default HelloWorld;
