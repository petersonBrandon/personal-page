import React, { FC, useEffect, useState } from "react";

const Navigation: FC = () => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [hamburgerDisplay, sethamburgerDisplay] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavDisplay(false);
      if (window.scrollY >= window.innerHeight - 10) {
        sethamburgerDisplay(true);
      } else {
        sethamburgerDisplay(false);
      }

      if (window.scrollY >= window.innerHeight * 4 - 10) {
        setHamburgerColor(true);
      } else {
        setHamburgerColor(false);
      }
    };

    if (window.pageYOffset >= window.innerHeight - 10) {
      sethamburgerDisplay(true);
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <div
        id="hamburger_icon_wrapper"
        className={hamburgerDisplay ? "animate_in" : "animate_out"}
        onClick={() => setNavDisplay(!navDisplay)}
      >
        <div id="hamburger_icon" className={navDisplay ? "hamburger_open" : ""}>
          <div
            className={`hamburger_line ${
              hamburgerColor ? "ham_light" : "ham_dark"
            }`}
            id="hamburger_top"
          />
          <div
            className={`hamburger_line ${
              hamburgerColor ? "ham_light" : "ham_dark"
            }`}
            id="hamburger_middle"
          />
          <div
            className={`hamburger_line ${
              hamburgerColor ? "ham_light" : "ham_dark"
            }`}
            id="hamburger_bottom"
          />
        </div>
      </div>
      <div
        id="nav_item_container"
        className={navDisplay ? "nav_open" : "nav_closed"}
      >
        <div className="nav_tile">
          <a href="#home_view">HOME</a>
          <span className="nav_tile_hover"></span>
        </div>
        <div className="nav_tile">
          <a href="#about_me_view">ABOUT ME</a>
          <span className="nav_tile_hover"></span>
        </div>
        <div className="nav_tile">
          <a href="#skills_view">SKILLS</a>
          <span className="nav_tile_hover"></span>
        </div>
        <div className="nav_tile">
          <a href="#projects_view">PROJECTS</a>
          <span className="nav_tile_hover"></span>
        </div>
        <div className="nav_tile">
          <a href="#certifications_view">CERTIFICATES</a>
          <span className="nav_tile_hover"></span>
        </div>
        <div className="nav_tile">
          <a href="#contact_view">CONTACT</a>
          <span className="nav_tile_hover"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
