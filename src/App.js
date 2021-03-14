import React from "react";
import ThemeProvider from "./styles/ThemeProvider";
import GlobaSytle from "./styles/GlobalStyle";

import Home from "./components/pages/Home";

function App() {
  return (
    <ThemeProvider>
      <GlobaSytle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
