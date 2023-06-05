import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../UserSlice";

function EditProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = useSelector((state) => state.auth.access_token);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitUsername = () => {
    fetch("http://localhost:8000/users/name", {
      method: "PUT",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
      }),
    }).then(() => {
      alert("username updated successfully!");
      dispatch(setToken(""));
      navigate("/");
    });
  };

  const handleSubmitPassword = () => {
    fetch("http://localhost:8000/users/password", {
      method: "PUT",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    }).then(() => {
      alert("password updated successfully!");
      dispatch(setToken(""));
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Edit Profile</h1>
      <div className="mt-6">
        <label className="text-xl">Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="border border-gray-300 px-2 py-1 rounded"
        />
        <button
          onClick={handleSubmitUsername}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Confirm
        </button>
      </div>
      <div className="mt-4">
        <label className="text-xl">Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-300 px-2 py-1 rounded"
        />
        <button
          onClick={handleSubmitPassword}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default EditProfilePage;
