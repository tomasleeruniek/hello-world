import React from "react";

import HelloWorld from "./hello-world.jsx";
import type { Color } from "./types";

class HelloWorldContainer extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.setColor = this.setColor.bind(this);
  }

  setColor(color: Color) {
    this.setState({ color: color });
  }

  render() {
    return (
      <div>
        <HelloWorld color={this.state.color} />
        <button onClick={() => this.setColor("red")}>Red</button>
        <button onClick={() => this.setColor("green")}>Green</button>
        <button onClick={() => this.setColor("blue")}>Blue</button>
      </div>
    );
  }
}

export default HelloWorldContainer;
