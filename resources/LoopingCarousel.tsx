import React, { FC } from "react";

type props = {
  children: any;
  duration: Number;
};

const LoopingCarousel: FC<props> = ({ children, duration }) => {
  const style = { "--duration": `${duration}ms` } as React.CSSProperties;
  return (
    <div className="loop-slider" style={style}>
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

export default LoopingCarousel;
