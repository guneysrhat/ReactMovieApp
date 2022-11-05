import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
