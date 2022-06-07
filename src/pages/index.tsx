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
          src={"../images/IMG_2468.jpg"}
          alt="A douche at Compagnieshaven Enkhuizen"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
      stad: "Enkhuizen",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2464.jpg"}
          alt="A douche at Compagnieshaven Enkhuizen"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
      stad: "Enkhuizen",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2465.jpg"}
          alt="A douche at Compagnieshaven Enkhuizen"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
      stad: "Enkhuizen",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2467.jpg"}
          alt="A douche at Compagnieshaven Enkhuizen"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
      stad: "Enkhuizen",
    },
    {
      img: (
        <StaticImage
          src={"../images/285600891_427917692472901_6940828723852816607_n.jpg"}
          alt="A douche with Champagne at Compagnieshaven Enkhuizen"
        />
      ),
      latitude: "52° 42’ 11,022” N",
      longitude: "005° 17’ 53,67” E",
      place: "Compagnieshaven",
      stad: "Enkhuizen",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2132.jpg"}
          alt="A douche at Vissershaven Makkum"
        />
      ),
      latitude: "53° 03’ 12,47” N",
      longitude: "005° 24’ 11,19” E",
      place: "Vissershaven",
      stad: "Makkum",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2129.jpg"}
          alt="A douche at Vissershaven Makkum"
        />
      ),
      latitude: "53° 03’ 12,47” N",
      longitude: "005° 24’ 11,19” E",
      place: "Vissershaven",
      stad: "Makkum",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2166.jpg"}
          alt="A douche at Buitenhaven Den Oever"
        />
      ),
      latitude: "52° 56’ 14,352” N",
      longitude: "005° 1’ 56,57” E",
      place: "Buitenhaven",
      stad: "Den Oever",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2165.jpg"}
          alt="A douche at Buitenhaven Den Oever"
        />
      ),
      latitude: "52° 56’ 14,352” N",
      longitude: "005° 1’ 56,57” E",
      place: "Buitenhaven",
      stad: "Den Oever",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2164.jpg"}
          alt="A douche at Waddenhaven Oudeschild, Texel"
        />
      ),
      latitude: "53° 2’ 41,2” N",
      longitude: "004° 51’ 25,77” E",
      place: "Waddenhaven",
      stad: "Oudeschild",
      island: "Texel",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2161.jpg"}
          alt="A douche at Waddenhaven Oudeschild, Texel"
        />
      ),
      latitude: "53° 2’ 41,2” N",
      longitude: "004° 51’ 25,77” E",
      place: "Waddenhaven",
      stad: "Oudeschild",
      island: "Texel",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2533.jpg"}
          alt="A douche at Bataviahaven Lelystad"
        />
      ),
      latitude: "52° 31’ 9,192” N",
      longitude: "005° 26’ 22,248” E",
      place: "Bataviahaven",
      stad: "Lelystad",
    },
    {
      img: (
        <StaticImage
          src={"../images/IMG_2535.jpg"}
          alt="A douche at Bataviahaven Lelystad"
        />
      ),
      latitude: "52° 31’ 9,192” N",
      longitude: "005° 26’ 22,248” E",
      place: "Bataviahaven",
      stad: "Lelystad",
    },
  ];

  const randomItemIdx = () => {
    return Math.floor(items.length * Math.random());
  };

  let mayBeIdx = NaN;
  if (typeof window !== "undefined") {
    const hash = window.location.hash.substring(1);
    const mayBeIdx = parseInt(hash);
  }

  const [idx, setIdx] = useState(
    Number.isNaN(mayBeIdx) ? randomItemIdx() : mayBeIdx
  );

  const calculateNextIdx = () => {
    let x = idx;
    while (x == idx) {
      x = randomItemIdx();
    }
    return x;
  };

  const moveNext = () => {
    const x = calculateNextIdx();
    setIdx(x);
    typeof window !== "undefined" &&
      typeof window.gtag !== "undefined" &&
      window.gtag("event", "clickNext", { idx: idx, nextIdx: x });
  };

  const item = items[idx];

  useEffect(() => {
    typeof window !== "undefined" &&
      window.history.replaceState(
        null,
        "A douche at " + item.place,
        "/#" + idx
      );

    typeof window !== "undefined" &&
      typeof window.gtag !== "undefined" &&
      window.gtag("event", "show", { idx: idx });

    const timer = setTimeout(() => {
      const x = calculateNextIdx();
      setIdx(x);
      typeof window !== "undefined" &&
        typeof window.gtag !== "undefined" &&
        window.gtag("event", "moveNext", { idx: idx, nextIdx: x });
    }, 6200);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>
        <div id="place">{item.place}</div>
        <div id="stad">{item.stad}</div>
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
