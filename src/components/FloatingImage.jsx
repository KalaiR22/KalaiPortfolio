import React, { useState, useEffect, useRef } from "react";
import mouse from "../assets/mouse.png"; // Import your image

const FloatingImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newX = event.clientX;
      const newY = event.clientY;
      requestRef.current = requestAnimationFrame(() => {
        setPosition({ x: newX, y: newY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <img
      src={mouse}
      alt="Floating Star"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Ensure the image doesn't block other interactions
        transition: "top 0.1s ease-out, left 0.1s ease-out", // Smooth transition
      }}
    />
  );
};

export default FloatingImage;
