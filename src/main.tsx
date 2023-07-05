import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Header } from "./Header.tsx";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
