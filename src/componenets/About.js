import React, { useEffect, useRef } from "react";
import { animate, stagger, text } from "animejs";

const About = () => {
  // Step 1: Create a reference to the <h1> element
  const headingRef = useRef(null);

  // Step 2: Run animation after component mounts
  useEffect(() => {
    if (headingRef.current) {
      // Step 3: Split text into characters
      const { chars } = text.split(headingRef.current, {
        words: false,
        chars: true,
      });

      // Step 4: Animate the characters
      animate(chars, {
        y: [
          { to: "-2.75rem", ease: "outExpo", duration: 600 },
          { to: 0, ease: "outBounce", duration: 800, delay: 100 },
        ],
        rotate: {
          from: "-1turn",
          delay: 0,
        },
        delay: stagger(50),
        ease: "inOutCirc",
        loopDelay: 1000,
        loop: true,
      });
    }
  }, []); // [] means run only once when the component mounts

  return (
    <div>
      <h1 ref={headingRef}>This is About!</h1>
    </div>
  );
};

export default About;
