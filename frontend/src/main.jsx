import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Test from "./components/Test.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import withAuth from "./components/withAuth";
import EditProfilePage from "./components/EditProfilePage.jsx"; // 新添加的页面
const App_WithAuth = withAuth(App);
const EditProfilePage_WithAuth = withAuth(EditProfilePage);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/todo" element={<App_WithAuth />} />
        <Route path="/edit-profile" element={<EditProfilePage_WithAuth />} />
      </Routes>
    </Router>
  </Provider>
  // </React.StrictMode>
);
