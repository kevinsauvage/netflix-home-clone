import "./Header.scss";
import Nav from "../nav/Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    };
  });
  return (
    <header style={{ backgroundColor: show ? "#111" : "transparent" }}>
      <Nav />
    </header>
  );
};

export default Header;
