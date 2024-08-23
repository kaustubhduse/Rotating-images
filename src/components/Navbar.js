  "use client";
  import React, { useState } from "react";
  import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
  import { cn } from "../libs/utils";

  function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
      // Hide navbar when scrolling down and show when scrolling up
      setVisible(latest < scrollY.getPrevious());
    });

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          className="bg-[rgba(252,251,251,0.85)] fixed top-2 mx-[2%] inset-x-0 p-4 box-shadow rounded-[20px] z-[50] flex items-center justify-between"
        >
          {/* Logo */}
          <div>
            <h1 className="text-3xl">
              <span className="text-purple-500">N</span>AV
              <span className="text-purple-400">B</span>AR
            </h1>
          </div>

          {/* Navigation Menu for Large Screens */}
          <div className="hidden lg:flex space-x-[18%] justify-center items-center">
            <h1 className="font-bold cursor-pointer">Home</h1>
            <h1 className="font-bold cursor-pointer">Products</h1>
            <h1 className="font-bold cursor-pointer">Resources</h1>
            <h1 className="font-bold cursor-pointer">Pricing</h1>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none h-8 w-8 flex items-center justify-center"
            >
              &#9776; {/* Unicode for hamburger icon */}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-[80px] left-0 w-full bg-white p-4 box-shadow rounded-b-[20px] z-50 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold cursor-pointer">Home</h1>
              <h1 className="font-bold cursor-pointer">Products</h1>
              <h1 className="font-bold cursor-pointer">Resources</h1>
              <h1 className="font-bold cursor-pointer">Pricing</h1>
              <div className="flex flex-col space-y-3 mt-4">
                <div className="bg-[rgba(249,245,255,1)] rounded-[8px] px-3 py-2 shadow-custom border-[1px] w-fit">
                  <h1 className="text-[rgba(105,65,198,1)] font-semibold cursor-pointer">
                    Log in
                  </h1>
                </div>
                <div className="bg-[rgba(127,86,217,1)] rounded-[8px] px-3 py-2 w-fit">
                  <h1 className="text-[rgb(255,255,255)] rounded-[1px] font-semibold cursor-pointer ">
                    Sign up
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Sign up and Log in for Large Screens */}
          <div className="hidden lg:flex space-x-3">
            <div className="bg-[rgba(249,245,255,1)] rounded-[8px] px-3 py-2 shadow-custom border-[1px]">
              <h1 className="text-[rgba(105,65,198,1)] font-semibold cursor-pointer">
                Log in
              </h1>
            </div>
            <div className="bg-[rgba(127,86,217,1)] rounded-[8px] px-3 py-2">
              <h1 className="text-[rgb(255,255,255)] rounded-[1px] font-semibold cursor-pointer">
                Sign up
              </h1>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  export default Navbar;
