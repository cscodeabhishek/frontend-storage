import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RBACProvider } from "./rbac/RBACContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RBACProvider>
    <App />
  </RBACProvider>
);
