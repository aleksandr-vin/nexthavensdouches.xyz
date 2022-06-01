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

  const items = [
    {
      img: (
        <StaticImage
          src={"../images/IMG_2465.jpg"}
          alt="A douche at Compagnieshaven"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2467.jpg"}
          alt="A douche at Compagnieshaven"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2132.jpg"}
          alt="A douche at Haven Makkum"
        />
      ),
      latitude: "53° 03’ 12,47” N",
      longitude: "005° 24’ 11,19” E",
      place: "Haven Makkum",
    },
  ];

  const randomItemIdx = () => {
    return Math.floor(items.length * Math.random());
  };

  const hash = window.location.hash.substring(1);
  console.log(";;; " + hash);
  const mayBeIdx = parseInt(hash);

  const [idx, setIdx] = useState(
    Number.isNaN(mayBeIdx) ? randomItemIdx() : mayBeIdx
  );

  const calculateNextIdx = () => {
    let x = idx;
    while (x == idx) {
      x = randomItemIdx();
      console.log(x);
    }
    return x;
  };

  const moveNext = () => {
    setIdx(calculateNextIdx());
  };

  const item = items[idx];

  useEffect(() => {
    window.history.replaceState(null, "A douche at " + item.place, "/#" + idx);

    const timer = setTimeout(() => {
      setIdx(calculateNextIdx());
    }, 6200);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>
        <div id="place">{item.place}</div>
        <div id="location">
          {item.latitude} {item.longitude}
        </div>
        <div id="next-button" onClick={() => moveNext()}>
          NEXT
        </div>
        <div id="info" onClick={() => moveNext()}>
          HAVENs' DOUCHES
        </div>
        <div id="author" onClick={() => moveNext()}>
          Aleksandr Vinokurov
        </div>
      </div>
      <div id="wrapper">
        <TransitionGroup className="carousel">
          <Fade key={Math.random()}>{item.img}</Fade>
        </TransitionGroup>
      </div>
    </div>
  );
}
