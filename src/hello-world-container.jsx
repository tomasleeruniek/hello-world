// @flow

import React from "react";

import HelloWorld from "./hello-world.jsx";
import ColorButton from "./color-button.jsx";
import type { Color } from "./types";

type Props = {||};

type State = {|
  color?: Color
|};

class HelloWorldContainer extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = { color: undefined };
    this.setColor = this.setColor.bind(this);
  }

  render() {
    const { color } = this.state;

    return (
      <div>
        <HelloWorld color={color} />
        {["red", "green", "blue"].map(c => (
          <ColorButton key={c} color={c} setColor={this.setColor} />
        ))}
      </div>
    );
  }

  setColor(color: Color) {
    this.setState({ color });
  }
}

export default HelloWorldContainer;
