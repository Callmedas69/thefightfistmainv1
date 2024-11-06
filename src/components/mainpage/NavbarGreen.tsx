"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ttsLogo from "@/assets/homepage/TTS_Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "FIGHT NFT", path: "https://mint.fightfist.io/" },
  { title: "SWAP", path: "/commingsoon" },
  { title: "STAKE", path: "/commingsoon" },
  { title: "ART GALLERY", path: "/commingsoon" },
  { title: "WHITEPAPER", path: "/whitepaper" },
];

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const NavbarGreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use effect to toggle overflow-hidden on body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative pt-10">
        <div className="max-w-[1350px] lg:max-w-[2500px] xl:max-w-[3500px] mx-auto flex items-center justify-between h-20 px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Image
              src={ttsLogo}
              alt="TTS Logo"
              width={85}
              height={85}
              className="rounded-full hidden md:block"
            />
          </div>

          <div className="border border-slate-400 text-nowrap hidden md:flex items-center bg-black rounded-3xl px-5 py-1">
            {navLinks.map((nav, index) => (
              <div
                key={index}
                className="px-4 py-2 md:text-lg lg:text-xl xl: font-semibold text-white cursor-pointer z-50"
              >
                <Link href={nav.path} passHref className="hover:text-blue-500">
                  {nav.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="md:hidden absolute top-0 left-0 mt-10 ml-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-8 h-8 bg-slate-500 text-white rounded-lg" />
              ) : (
                <Menu className="w-8 h-8 bg-slate-500 text-white rounded-lg" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-black/80 overflow-hidden"
          >
            <div className="flex flex-col justify-center items-center py-5">
              {navLinks.map((nav, index) => (
                <div
                  key={index}
                  className="px-6 py-5 font-semibold text-white cursor-pointer z-50"
                >
                  <Link
                    href={nav.path}
                    passHref
                    className="hover:text-blue-500"
                  >
                    {nav.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarGreen;
