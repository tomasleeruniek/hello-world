import tape from "tape";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import HelloWorldContainer from "../src/hello-world-container.jsx";
import HelloWorld from "../src/hello-world.jsx";
import { COLORS } from "../src/constants";

tape("button click handlers change the HelloWorld's 'color' prop", t => {
  t.plan(3);

  configure({ adapter: new Adapter() });

  const wrapper = shallow(<HelloWorldContainer />);

  const component = wrapper.instance();

  COLORS.forEach(color => {
    component.setColor(color);

    t.ok(wrapper.containsMatchingElement(<HelloWorld color={color} />));
  });
});
