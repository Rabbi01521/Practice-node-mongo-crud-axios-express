import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <nav>
        <Link style={{ marginRight: "10px" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "10px" }} to="/users">
          Users
        </Link>
        <Link style={{ marginRight: "10px" }} to="/users/add">
          add users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
