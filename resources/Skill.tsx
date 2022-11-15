import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

type props = {
  image: StaticImageData;
  title: string;
};

const Skill: FC<props> = ({ image, title }) => {
  return (
    <div className="skill_wrapper">
      <div className="skill_image_wrapper">
        <Image src={image} alt={title} width={2000} height={2000} />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default Skill;
