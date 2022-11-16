import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import Skill from "../resources/Skill";
import LoopingCarousel from "../resources/LoopingCarousel";
import Navigation from "../resources/Navigations";

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

  const ROWS = 3;
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

      <main>
        <Navigation />
        <section className="view" id="home_view">
          <div id="home_header">
            <h1 id="home_title">BRANDON PETERSON</h1>
            <h3 id="home_subtitle">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="view" id="about_me_view">
          <h1 className="view_title" id="about_me_title">
            ABOUT ME
          </h1>
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
                  return (
                    <Skill
                      key={skill.title}
                      image={skill.image}
                      title={skill.title}
                    />
                  );
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
