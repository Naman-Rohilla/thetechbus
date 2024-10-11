import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import LxtButton from "../buttons/lxtButton";
import menuItems from "../../jsons/menuItems";

export default function Navbar() {
  const textButton = "Book a Free Demo";

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="logo.png" />
          <span>The Tech Bus</span>
        </div>
        <div className="menu-items">
          {menuItems.map((mt, index) => (
            <a key={index} href={mt.redirect} className="item">
              {mt.link}
            </a>
          ))}
          <LxtButton text={textButton} />
        </div>
      </div>
    </div>
  );
}
