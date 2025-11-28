import React, { useRef, useState, useEffect } from "react";
import html from "../../public/Icons/Html.png";
import css from "../../public/Icons/Css.png";
import bootstrap from "../../public/Icons/Bootstrap.png";
import javascript from "../../public/Icons/JS4.png";
import jquery from "../../public/Icons/Jquery.png";
import reactIcon from "../../public/Icons/React.png";
import node from "../../public/Icons/Node1.png";
import express from "../../public/Icons/Express js.png";
import sql from "../../public/Icons/Postgre.png";
import git from "../../public/Icons/Github.png";

const icons = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: bootstrap, name: "Bootstrap" },
  { src: javascript, name: "JavaScript" },
  { src: jquery, name: "jQuery" },
  { src: reactIcon, name: "React" },
  { src: node, name: "Node.js" },
  { src: express, name: "Express" },
  { src: sql, name: "PostgreSQL" },
  { src: git, name: "Git" },
];

interface RotatableDialProps {
  size?: number;
  autoRotateSpeed?: number;
}

export const DialIcons: React.FC<RotatableDialProps> = ({
  size = 300,
  autoRotateSpeed = 20,
}) => {
  const dialRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [dragging, setDragging] = useState(false);

  const startAngleRef = useRef<number>(0);
  const startRotationRef = useRef<number>(0);

  // IMPORTANT: Track last timestamp to keep speed constant
  const lastTimeRef = useRef<number>(performance.now());

  // Find angle relative to center
  const getPointerAngle = (clientX: number, clientY: number) => {
    if (!dialRef.current) return 0;
    const rect = dialRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg + 90;
  };

  // Start drag
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);

    const angle = getPointerAngle(e.clientX, e.clientY);
    startAngleRef.current = angle;
    startRotationRef.current = rotation;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  // Dragging rotation
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;

    const angle = getPointerAngle(e.clientX, e.clientY);
    const delta = angle - startAngleRef.current;

    setRotation(startRotationRef.current + delta);
  };

  // Stop drag
  const onPointerUp = () => {
    setDragging(false);

    // RESET timestamp so auto rotation does NOT speed up
    lastTimeRef.current = performance.now();
  };

  // Drag listeners
  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [dragging]);

  // CONSTANT AUTO-ROTATE (never speeds up)
  useEffect(() => {
    const animate = (time: number) => {
      if (!dragging) {
        const delta = (time - lastTimeRef.current) / 1000; // seconds
        setRotation((prev) => prev + autoRotateSpeed * delta);
      }

      lastTimeRef.current = time;
      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [dragging, autoRotateSpeed]);

  return (
    <div
      ref={dialRef}
      className="dial-icons"
      style={{ width: size, height: size }}
      onPointerDown={onPointerDown}
    >
      <div
        className="icons-wrapper"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 360;
          const radius = size / 2 - 30;
          const rad = (angle - 90) * (Math.PI / 180);

          const x = radius * Math.cos(rad) + size / 2 - 20;
          const y = radius * Math.sin(rad) + size / 2 - 20;

          return (
            <img
              key={icon.name}
              src={icon.src}
              alt={icon.name}
              className="dial-icon"
              style={{ left: x, top: y }}
            />
          );
        })}
      </div>

      <div className="dial-center">Skills</div>
    </div>
  );
};
