import { render, cleanup } from "@testing-library/react";
import Button from "./button";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("button renders successfully", () => {
  const { getByTestId } = render(<Button value="Undo" />);
  expect(getByTestId("btn")).toHaveTextContent("Undo");
});

it("matches snapshow", () => {
  const tree = renderer.create(<Button value="Refresh"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button value="Pavan"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
