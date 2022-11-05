import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../auth/firebase-config";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let path = useLocation().pathname;
  const navigate = useNavigate();

  const handeSubmit = async (e) => {
    e.preventDefault();
    const displayName = `${name} ${lastName}`;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      console.log(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <Form className="form" onSubmit={handeSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter your lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
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

export default Register;
