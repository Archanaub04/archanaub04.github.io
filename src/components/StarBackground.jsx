import { useState, useEffect } from "react";

// each star will be object with - id, size, x, y , opacity, animationDuration

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // reduce stars when resize window
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // generate stars based on screen size
  const generateStars = () => {
    // no of stars will be based on screen window width and size of system
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // random size between 1 and 4px
        x: Math.random() * 100, // random x position in percentage
        y: Math.random() * 100, // random y position in percentage
        opacity: Math.random() * 0.5 + 0.5, // random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // random duration between 2 and 6 seconds
      });
    }
    setStars(newStars);
  };

  // each meteor will be object with - id, size, x, y , delay, animationDuration

  // generate meteor based on screen size
  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // random size between 1 and 3px
        x: Math.random() * 100, // random x position in percentage
        y: Math.random() * 20, // random y position in percentage
        delay: Math.random() * 15, // random delay between 0 and 15 seconds
        animationDuration: Math.random() * 3 + 3, // random duration between 3 and 6 seconds
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px", // long meteor line
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay, // delay for staggered effect
            animationDuration: meteor.animationDuration + "s", // smooth, variable speed
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;

/*
Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Example: 0.0, 0.25, 0.73, etc.

Multiply by 3: Math.random() * 3

This scales the random number to be between 0 and just below 3.

Example output: 0.0 to 2.999...

Add 1: Math.random() * 3 + 1

Now the range becomes between 1 and just below 4.

Example output: 1.0 to 3.999.
*/
