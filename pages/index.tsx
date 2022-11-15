import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Skill from "../resources/Skill";
import LoopingCarousel from "../resources/LoopingCarousel";

import profilePic from "../public/profilePic.jpg";
import js_logo from "../public/skills/js_logo.jpg";
import css_logo from "../public/skills/css_logo.png";
import html_logo from "../public/skills/html_logo.png";
import react_logo from "../public/skills/react_logo.png";
import nextjs_logo from "../public/skills/nextjs_logo.png";
import typescript_logo from "../public/skills/typscript_logo.png";
import sass_logo from "../public/skills/sass_logo.png";
import nodejs_logo from "../public/skills/nodejs_logo.png";
import mongodb_logo from "../public/skills/mongodb_logo.png";
import java_logo from "../public/skills/java_logo.png";
import cpp_logo from "../public/skills/c++_logo.png";
import python_logo from "../public/skills/python_logo.png";
import github_logo from "../public/skills/github_logo.png";
import linux_logo from "../public/skills/linux_logo.png";
import jira_logo from "../public/skills/jira_logo.png";
import git_logo from "../public/skills/git_logo.png";

export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);

  const [hamburgerDisplay, sethamburgerDisplay] = useState(false);
  const [navDisplay, setNavDisplay] = useState(false);

  const ROWS = 2;
  const DURATION = 40000;

  const SKILLS = [
    { image: js_logo, title: "JavaScript" },
    { image: css_logo, title: "CSS" },
    { image: html_logo, title: "HTML-5" },
    { image: react_logo, title: "React" },
    { image: nextjs_logo, title: "NEXT.js" },
    { image: typescript_logo, title: "TypeScript" },
    { image: sass_logo, title: "Sass" },
    { image: nodejs_logo, title: "Node.js" },
    { image: mongodb_logo, title: "MongoDB" },
    { image: java_logo, title: "Java" },
    { image: cpp_logo, title: "C++" },
    { image: python_logo, title: "Python" },
    { image: github_logo, title: "GitHub" },
    { image: git_logo, title: "Git" },
    { image: linux_logo, title: "Linux" },
    { image: jira_logo, title: "Jira" },
  ];

  const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());
  const random = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min)) + min;

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
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

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
          <h1 className="view_title">SKILLS</h1>
          <div id="skills_content">
            {[...new Array(ROWS)].map((_, i) => (
              <LoopingCarousel
                key={i}
                duration={random(DURATION - 10000, DURATION + 10000)}
              >
                {shuffle(SKILLS).map((skill) => {
                  return <Skill image={skill.image} title={skill.title} />;
                })}
              </LoopingCarousel>
            ))}
            <div className="fade" />
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
