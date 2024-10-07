import React, { useState, useEffect } from "react";

interface ScrollOpacityImageProps {
  src: string;
  alt: string;
}

const ScrollOpacityImage: React.FC<ScrollOpacityImageProps> = ({
  src,
  alt,
}) => {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const image = document.querySelector(".scroll-opacity-image");

      if (!image) return;

      // Get the distance between the top of the image and the top of the viewport
      const distanceToTop = (image as HTMLElement).getBoundingClientRect().top;

      // Calculate the threshold for starting the opacity change
      const threshold = windowHeight / 4;

      // Calculate the opacity based on the distance to the top of the viewport
      if (distanceToTop <= threshold) {
        // Calculate the opacity based on the portion of the image within the viewport
        const visiblePortion = Math.max(
          0,
          Math.min(1, (threshold - distanceToTop) / threshold)
        );
        setOpacity(visiblePortion);
      } else if (distanceToTop < windowHeight) {
        // Set opacity to 1 if more than a quarter of the image is within the viewport
        setOpacity(1);
      } else {
        // Set opacity to 0 if less than a quarter of the image is within the viewport
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      className="scroll-opacity-image"
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        opacity,
      }}
    />
  );
};

export default ScrollOpacityImage;
