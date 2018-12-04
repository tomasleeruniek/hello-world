// @flow

import React from "react";

import type { Color } from "./types";

type Props = {|
  onClick: (color: Color) => void,
  color: Color
|};

class ColorButton extends React.Component<Props> {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { setColor, color } = this.props;

    return (
      <button type="button" onClick={this.onClick}>
        {color}
      </button>
    );
  }

  onClick() {
    this.props.setColor(this.props.color);
  }
}

export default ColorButton;
