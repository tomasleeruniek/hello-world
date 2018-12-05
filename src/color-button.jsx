// @flow

import * as React from "react";

import type { ColorType } from "./types";

type PropsType = {|
  setColor: (color: ColorType) => void,
  color: ColorType
|};

class ColorButton extends React.Component<PropsType> {
  render(): React.Node {
    const { color } = this.props;

    return (
      <button type="button" onClick={this.handleClick}>
        {color}
      </button>
    );
  }

  handleClick = () => {
    const { color, setColor } = this.props;

    setColor(color);
  };
}

export default ColorButton;
