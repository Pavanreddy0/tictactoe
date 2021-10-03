import { render, cleanup } from "@testing-library/react";
import Box from "./box";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Box />, div);
});

it("button renders successfully", () => {
  const { getByTestId } = render(<Box value="Undo" />);
  expect(getByTestId("box")).toHaveTextContent("Undo");
});

it("matches snapshow", () => {
  const tree = renderer.create(<Box value="Refresh"></Box>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Box value="Pavan"></Box>).toJSON();
  expect(tree).toMatchSnapshot();
});
