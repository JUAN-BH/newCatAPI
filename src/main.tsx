import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global/tailwind.css";
import { InitialContextProvider } from "./context/initalStateContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InitialContextProvider>
      <App />
    </InitialContextProvider>
  </React.StrictMode>
);
