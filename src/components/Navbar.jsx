import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FilmConnect</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
          <Link to="/pitchsubmission">Pitch Submission</Link>
<Link to="/messages">Messages</Link>
<Link to="/login">
<button>Login</button>
<Link to="/userprofile">
  <button>User Profile</button></Link>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
