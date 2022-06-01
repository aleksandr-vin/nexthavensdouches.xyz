import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

export default function Home() {
  const Fade = ({ children, ...props }) => (
    <CSSTransition {...props} timeout={1300} classNames="fade">
      {children}
    </CSSTransition>
  );

  const [idx, setIdx] = useState(0);

  const images = [
    <StaticImage src={"../images/IMG_2465.jpg"} alt="A douche" />,
    <StaticImage src={"../images/IMG_2467.jpg"} alt="A douche" />,
    <StaticImage src={"../images/IMG_2132.jpg"} alt="A douche" />,
  ];

  const calculateNextIdx = () => {
    // const x = Math.floor(images.length * Math.random());
    const x = (idx + 1) % images.length;
    console.log(x);
    return x;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx(calculateNextIdx());
    }, 5000);

    return () => clearTimeout(timer);
  });

  const moveNext = () => {
    setIdx(calculateNextIdx());
  };

  const img = images[idx];

  return (
    <div>
      <div>
        #{idx}
        <div onClick={() => moveNext()}>NEXT</div>
      </div>
      <div id="wrapper">
        <TransitionGroup className="carousel">
          <Fade key={Math.random()}>{img}</Fade>
        </TransitionGroup>
      </div>
    </div>
  );
}
