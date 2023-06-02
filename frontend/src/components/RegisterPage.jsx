import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { setUsername, setEmail } from "../UserSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.UserName);
  const email = useSelector((state) => state.auth.email);

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function registerUser() {
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then(() => {
        alert("注册成功");
        // 跳转到登录页面
        navigate("/login");
      })
      .catch((error) => alert("Error: " + error));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold text-center">TodoList 注册</h2>
      <input
        className="mb-2 px-3 py-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="昵称"
        value={Username}
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
      <input
        className="mb-2 px-3 py-2 border border-gray-300 rounded-md"
        type="email"
        placeholder="邮箱"
        value={Email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <input
        className="mb-2 px-3 py-2 border border-gray-300 rounded-md"
        type="password"
        placeholder="密码"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="mb-4 px-3 py-2 border border-gray-300 rounded-md"
        type="password"
        placeholder="确认密码"
        value={ConfirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400"
        disabled={
          !username || !email || !password || password !== confirmPassword
        }
        onClick={() => {
          registerUser();
        }}
      >
        注册
      </button>
    </div>
  );
};

export default RegisterPage;
