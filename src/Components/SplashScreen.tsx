import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
type splashProp = {
  setSplash: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SplashScreen = ({ setSplash }: splashProp) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const h1 = document.querySelector(".splashH1");

    if (!h1) return;

    const letters = h1.textContent.split("");
    const middle = letters.length / 2;

    h1.innerHTML = letters
      .map(
        (letter, index) =>
          `<span class="${index < middle ? "front" : "back"}">${letter}</span>`,
      )
      .join("");
  }, []);

  useGSAP(
    () => {
      gsap.from(".front", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.15,
      });

      gsap.from(".back", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: -0.15,
        onComplete: () => {
          setSplash(false);
        },
      });
    },
    { scope: container },
  );

  return (
    <div id="splashScreen" ref={container}>
      <h1 className="splashH1">PortFolio</h1>
    </div>
  );
};
