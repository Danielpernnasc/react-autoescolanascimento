import React from "react";
import {Memory as Router } from  "react-router-dom";
import { render } from "@testing-library/react";

import ThemeProvider from "../styles/ThemeProvider";



const TestProvider = ({ children }) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
