import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tag from "./reducers/tag";

import App from "./App";

const store = configureStore({
  reducer: { tag },
});

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
