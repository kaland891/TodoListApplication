import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Test from "./Test.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import RegisterPage from "./RegisterPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/test"
          element={
            <Provider store={store}>
              <Test />
            </Provider>
          }
        />
        <Route
          path="/"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
