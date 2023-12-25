import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import AllRoutes from "./routes";
import OnStartActions from "modules/shared/components/OnStartActions";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <OnStartActions />
      <AllRoutes />
    </Provider>
  </React.StrictMode>,
);
