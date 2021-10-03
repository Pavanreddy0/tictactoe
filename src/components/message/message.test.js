import { render, screen, cleanup } from "@testing-library/react";
import Message from "./message";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Message />, div);
});

it("button renders successfully", () => {
  const { getByTestId } = render(<Message value="This is Pavan" />);
  expect(getByTestId("button")).toHaveTextContent("This is Pavan");
});

it("matches snapshow", () => {
  const tree = renderer.create(<Message value="Hi"></Message>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Message value="Pavan"></Message>).toJSON();
  expect(tree).toMatchSnapshot();
});
