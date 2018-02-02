import React from "react";
import { shallow } from "enzyme";
import HomePage from "../../components/HomePage.js";

test("Should render HomePage", () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
