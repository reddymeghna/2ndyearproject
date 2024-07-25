import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Import createRoot

import App from "./App";

createRoot(document.getElementById("root")).render( // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
);
