import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

const container = document.getElementById("root");
if (container) {
  // Create a root.
  const root = ReactDOM.createRoot(container);

  // Initial render: Render an element to the root.
  root.render(<App />);
}
