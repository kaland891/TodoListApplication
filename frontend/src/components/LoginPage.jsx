import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../UserSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function UserLog(e) {
    e.preventDefault();
    fetch("http://localhost:8000/login/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=&username=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(
        password
      )}&scope=&client_id=&client_secret=`,
    })
      .then(async (response) => {
        if (response.ok) {
          const token = await response.json(); // Wait until the Promise resolves
          dispatch(setToken(token));
          alert("登录成功");
          navigate("/");
        } else {
          if (response.status === 401) {
            throw new Error("用户名或密码错误");
          } else {
            throw new Error("Error: " + response.statusText);
          }
        }
      })
      .catch((error) => alert(`错误: ${error.detail}`));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4">欢迎登录</h2>
      <input
        className="mb-2 px-2 py-1 border rounded"
        type="email"
        placeholder="邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-2 px-2 py-1 border rounded"
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="px-4 py-2 border rounded" onClick={UserLog}>
        登录
      </button>
    </div>
  );
};

export default LoginPage;
