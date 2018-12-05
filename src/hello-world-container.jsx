// @flow

import * as React from "react";

import HelloWorld from "./hello-world.jsx";
import ColorButton from "./color-button.jsx";
import type { ColorType } from "./types";
import { COLORS } from "./constants";

type PropsType = {||};

type StateType = {|
  color?: ColorType
|};

class HelloWorldContainer extends React.Component<PropsType, StateType> {
  state = { color: undefined };

  render(): React.Node {
    const { color } = this.state;

    return (
      <div>
        <HelloWorld color={color} />
        {COLORS.map(
          (c): React.Node => (
            <ColorButton key={c} color={c} setColor={this.setColor} />
          )
        )}
      </div>
    );
  }

  setColor = (color: ColorType) => {
    this.setState({ color });
  };
}

export default HelloWorldContainer;
