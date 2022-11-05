import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ToRedirect from "./ToRedirect";

const AuthRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? <Outlet /> : <ToRedirect nav={"/"} />;
};

export default AuthRouter;
