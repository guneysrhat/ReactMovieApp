import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  let path = useLocation().pathname;
  return (
    <div className="login">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="warning">
          <p className="info">
            {path === "/login" && "Don't you have an account"}
            {path === "/register" && "Already have an account"}
            <Link to={`${path === "/login" ? "/register" : "/login"}`}>
              {path === "/register" && "Login"}
              {path === "/login" && "Register"}
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
