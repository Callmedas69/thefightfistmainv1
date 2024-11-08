"use client";

import React from "react";
import twitterX from "@/assets/homepage/twitter.png";
import telegram from "@/assets/homepage/telegram.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const communityList = [
  {
    title: "X",
    img: twitterX,
    path: "https://x.com/TheFightFist",
  },
  {
    title: "Telegram",
    img: telegram,
    path: "https://t.me/TrumpsFightFist",
  },
];

const Community = () => {
  return (
    <div className="bg-[#800027] overflow-hidden w-full">
      <div className="container mx-auto flex flex-col justify-center items-center text-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold max-w-2xl">
          JOIN THE FIGHT ACROSS X & TG + WIN NFTS
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
          {communityList.map((community, index) => (
            <motion.div
              key={index}
              className="box"
              animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Link href={community.path}>
                <Image
                  src={community.img}
                  alt={community.title}
                  width={50}
                  height={50}
                  className="bg-white rounded-lg"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
