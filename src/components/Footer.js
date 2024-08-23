import React, { useEffect, useState, useRef } from "react";
import colorful from "../assets/colorful.png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 } // Adjust the threshold as needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`flex justify-between p-10 mt-[45%] bg-black transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="w-[40%]">
        <h1 className="font-bold text-3xl text-white">Real time changes</h1>
        <p className="mt-[5%] text-white">
          See changes as they happen. With our platform, you can track every
          modification in real time. No more confusion about the latest version
          of your project. Say goodbye to the chaos of version control and
          embrace the simplicity of real-time updates.
        </p>
        <h1 className="text-white">Version Control</h1>
      </div>
      <div>
        <img src={colorful} alt="colorful" />
      </div>
    </div>
  );
}

export default Footer;
