import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import LxtButton from "../buttons/lxtButton";

export default function Navbar() {
  const textButton = "Book a Free Demo";

  const menuItems = [
    {
      link: "Home",
      redirect: "/about",
    },
    {
      link: "Services",
      redirect: "/rr",
    },
    {
      link: "Projects",
      redirect: "/rr",
    },
    {
      link: "About",
      redirect: "/rr",
    },
    {
      link: "Contact",
      redirect: "/rr",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="logo.png" />
          <span>The Tech Bus</span>
        </div>
        <div className="menu-items">
          {menuItems.map((mt, index) => (
            <Link key={index} to={mt.redirect} className="item" exact>
              {mt.link}
            </Link>
          ))}
          <LxtButton text={textButton} />
        </div>
      </div>
    </div>
  );
}
