import React from "react";

import "./hello-world.css";

const HelloWorld = React.memo(() => (
  <span styleName="hello-world">Hello World!</span>
));

export default HelloWorld;
