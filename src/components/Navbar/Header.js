import React from "react";
import Profile from "@mui/icons-material/PermIdentityOutlined";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Search from "./Search";
import Cart from "./Cart";
import "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const redirect = isAuthenticated ? "/account" : "/login";

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="PerfectFit" width="50px" height="50px" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="categories">
          <li>
            <Link to="/Men" state={{ gender: "Men", sort: "rating" }}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/Women" state={{ gender: "Women" }}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/Kids" state={{ gender: "Kids" }}>
              Kids
            </Link>
          </li>
        </ul>
      </nav>
      <Search />
      <div className="nav-icons">
        <Profile
          sx={{ cursor: "pointer" }}
          onClick={(e) => navigate(redirect)}
        />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
