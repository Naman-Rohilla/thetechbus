import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import LxtButton from "../buttons/lxtButton";
import menuItems from "../../jsons/menuItems";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import ScrollProgress from "../scrollIndicator/scrollProgress";

export default function Navbar() {
  const textButton = "Book a Free Demo";
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpenDrawer(false); // Close drawer if clicked outside
      }
    }

    if (openDrawer) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener on unmount
    };
  }, [openDrawer]);

  return (
    <>
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
            <a
              target="_blank"
              href="https://calendly.com/thetechbus-support/30min"
            >
              <LxtButton text={textButton} />
            </a>
          </div>
          <div className="hamburger">
            <img
              onClick={() => setOpenDrawer(true)}
              height={20}
              width={20}
              src="bars-solid.svg"
            />
          </div>
        </div>
        <ScrollProgress />
      </div>

      <AnimatePresence>
        {openDrawer && (
          <>
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: openDrawer ? "60%" : 0,
              }}
              exit={{
                width: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="drawer"
              ref={drawerRef}
            >
              <div className="drawer-header">
                <img
                  onClick={() => setOpenDrawer(false)}
                  height={20}
                  width={20}
                  src="arrow-right-solid.svg"
                />
              </div>
              <div className="drawer-content">
                {menuItems.map((it) => (
                  <a href={it.redirect}>
                    <img height={20} width={20} src={it.icon} />
                    <span>{it.link}</span>
                  </a>
                ))}
              </div>
              <div></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
