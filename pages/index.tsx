import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import profilePic from "../public/profilePic.jpg";

export default function Home() {
  const [hamburgerDisplay, sethamburgerDisplay] = useState(false);
  const [navDisplay, setNavDisplay] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavDisplay(false);
      if (window.scrollY >= window.innerHeight - 10) {
        sethamburgerDisplay(true);
      } else {
        sethamburgerDisplay(false);
      }
    };

    if (window.pageYOffset >= window.innerHeight - 10) {
      sethamburgerDisplay(true);
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Brandon Peterson</title>
        <meta name="description" content="Brandon Peterson's Portfolio page." />
      </Head>
      <nav>
        <div
          id="hamburger_icon_wrapper"
          className={hamburgerDisplay ? "animate_in" : "animate_out"}
          onClick={() => {
            setNavDisplay(!navDisplay);
          }}
        >
          <div
            id="hamburger_icon"
            className={navDisplay ? "hamburger_open" : ""}
          >
            <div className="hamburger_line" id="hamburger_top" />
            <div className="hamburger_line" id="hamburger_middle" />
            <div className="hamburger_line" id="hamburger_bottom" />
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
      <main
        onClick={() => {
          setNavDisplay(false);
        }}
      >
        <section className="view" id="home_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="view" id="about_me_view">
          <h1 className="view_title">ABOUT ME</h1>
          <div id="about_content">
            <div id="about_image_wrapper">
              <Image
                src={profilePic}
                alt="Brandon Peterson"
                width={3000}
                height={3000}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section className="view" id="skills_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="view" id="projects_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="view" id="certifications_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="view" id="contact_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
