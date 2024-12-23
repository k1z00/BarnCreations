import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./shared/store/index.ts";
import App from "./App.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
