import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // react library to talk to web browsers
import "./style.css"; //imports the styling for the components 

import App from "./App"; // imports the components made in app.js

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


