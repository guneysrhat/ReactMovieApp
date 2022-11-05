import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToRedirect = ({ nav }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(nav);
  }, [navigate, nav]);

  return <div>ToRedirect</div>;
};

export default ToRedirect;
