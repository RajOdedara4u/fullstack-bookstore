import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/Store.jsx";
import { Provider } from "react-redux";
import { AuthProvider } from "./store/contexStore/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </AuthProvider>
);
