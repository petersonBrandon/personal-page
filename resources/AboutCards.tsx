import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutCards = () => {
  const [selectedId, setSelectedId] = useState("");
  const cards = ["Purpose", "School", "Family", "Hobbies"];

  useEffect(() => {
    const onScroll = () => {
      setSelectedId("");
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  const getAboutInfo = (id: string, card: string) => {
    if (selectedId !== card) return <div>{card}</div>;

    switch (id) {
      case "Purpose":
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedId ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <h1>Purpose</h1>
            <p>
              To provide the world with state-of-the-art products and
              applications that utilize modern programming techniques and
              practices emphasizing, user experience design and advanced
              programming algorithms.
            </p>
            <p>
              <strong>My Mantra:</strong> Perfection through persistance.
            </p>
          </motion.div>
        );
      case "School":
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedId ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <h1>School</h1>
            <h2>Brigham Young University - Idaho</h2>
            <p className="padding-bottom0">
              I earned my bachelors degree in Software Engineering at Brigham
              Young University - Idaho, where I studied programming topics such
              as data structures, algorithm design, programming standards, and
              design patterns.
            </p>
            <p className="padding-top0">
              With this knowledge I have gained a deep understanding of core
              programming standards, ethics, and patterns, with the opportunity
              to implement said understanding not only in assignments but in my
              own personal and professional projects.{" "}
            </p>
          </motion.div>
        );
      case "Family":
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedId ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <h1>Family</h1>
            <p>
              I live in a small town in Tennessee called McMinnville with my
              wonderful wife Tori and our seven month old little girl, Lily.
            </p>
          </motion.div>
        );
      case "Hobbies":
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedId ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <h1 id="hobbies_header">Hobbies</h1>
            <div>
              <ul>
                <li>Programming</li>
                <li>Camping</li>
                <li>Hiking</li>
                <li>Photography</li>
                <li>Watersports</li>
                <li>Rappelling</li>
                <li>Rock Climbing</li>
                <li>Piano</li>
                <li>Card Games</li>
                <li>Kayaking</li>
                <li>Skiing</li>
              </ul>
            </div>
          </motion.div>
        );
      default:
        return <div>{card}</div>;
    }
  };
  return (
    <div className="about_cards">
      {cards.map((card) => (
        <motion.div
          key={card}
          id={card}
          layout
          className={selectedId === card ? "opened_card" : "card"}
          onClick={() =>
            selectedId === card ? setSelectedId("") : setSelectedId(card)
          }
          transition={{ duration: 0.25 }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          {getAboutInfo(selectedId, card)}
        </motion.div>
      ))}
      <motion.div
        className={`dim-layer ${selectedId ? "dim_open" : ""} `}
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};

export default AboutCards;
