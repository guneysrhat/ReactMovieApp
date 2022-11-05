import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let path = useLocation().pathname;
  return (
    <div>
      {" "}
      <div className="warning">
        <p className="info">
          {path === "/login" && "Don't you have an account"}
          {path === "/register" && "Already have an account"}
          <Link
            className="link"
            to={`${path === "/login" ? "/register" : "/login"}`}
          >
            {path === "/register" && "Login"}
            {path === "/login" && "Register"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
