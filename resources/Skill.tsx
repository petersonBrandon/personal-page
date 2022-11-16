import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type props = {
  image: StaticImageData;
  title: string;
};

const Skill: FC<props> = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{
        rotate: [0, -5, 10, -10, 5, 0],
        transition: { duration: 0.5 },
      }}
      className="skill_wrapper"
    >
      <div className="skill_image_wrapper">
        <Image src={image} alt={title} width={2000} height={2000} />
      </div>
      <h4>{title}</h4>
    </motion.div>
  );
};

export default Skill;
