// @flow

import * as React from "react";
import classnames from "classnames";

import type { ColorType } from "./types";
import css from "./hello-world.css";

type PropsType = {|
  color?: ColorType
|};

const HelloWorld = React.memo<PropsType>(
  (props): React.Node => {
    const { color = "red" } = props;

    return (
      <span className={classnames(css["hello-world"], css[color])}>
        Hello World!
      </span>
    );
  }
);

export default HelloWorld;
