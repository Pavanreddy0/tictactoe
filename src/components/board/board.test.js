import { render, cleanup } from "@testing-library/react";
import Board from "./board";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Board value="0" />, div);
});
