"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 w-16 h-16 bg-black bg-opacity-70 text-white rounded-full shadow-lg cursor-pointer text-lg"
          aria-label="Scroll to top"
        >
          Top
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
