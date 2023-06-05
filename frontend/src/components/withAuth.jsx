import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return function (props) {
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.auth.access_token);

    useEffect(() => {
      if (!accessToken) {
        alert("Please login first");
        navigate("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
