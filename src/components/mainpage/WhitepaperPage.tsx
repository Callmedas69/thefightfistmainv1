import * as React from "react";

import background from "@/assets/homepage/TopBG.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Paper01 from "@/assets/whitepaper/W_001.jpg";
import Paper02 from "@/assets/whitepaper/W_002.jpg";
import Paper03 from "@/assets/whitepaper/W_003.jpg";
import Paper04 from "@/assets/whitepaper/W_004.jpg";
import Paper05 from "@/assets/whitepaper/W_005.jpg";
import Paper06 from "@/assets/whitepaper/W_006.jpg";
import Paper07 from "@/assets/whitepaper/W_007.jpg";
import Paper08 from "@/assets/whitepaper/W_008.jpg";
import Paper09 from "@/assets/whitepaper/W_009.jpg";
import Paper10 from "@/assets/whitepaper/W_010.jpg";
import Paper11 from "@/assets/whitepaper/W_011.jpg";
import Paper12 from "@/assets/whitepaper/W_012.jpg";
import Image from "next/image";

const WP = [
  {
    hal: Paper01,
    title: "page_01",
  },
  {
    hal: Paper02,
    title: "page_02",
  },
  {
    hal: Paper03,
    title: "page_03",
  },
  {
    hal: Paper04,
    title: "page_04",
  },
  {
    hal: Paper05,
    title: "page_05",
  },
  {
    hal: Paper06,
    title: "page_06",
  },
  {
    hal: Paper07,
    title: "page_07",
  },
  {
    hal: Paper08,
    title: "page_08",
  },
  {
    hal: Paper09,
    title: "page_09",
  },
  {
    hal: Paper10,
    title: "page_10",
  },
  {
    hal: Paper11,
    title: "page_11",
  },
  {
    hal: Paper12,
    title: "page_12 ",
  },
];

export function Whitepaper() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center contrast-200 brightness-50 saturate-200 overflow-hidden blur-lg">
        <Image
          src={background}
          alt="background"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Centered Carousel */}
      <Carousel className="flex max-w-[90%] md:max-w-[700px] lg:max-w-[1000px] justify-center items-center z-20 relative pt-20 md:pt-32">
        <CarouselContent>
          {WP.map((paper, index) => (
            <CarouselItem key={index}>
              <div className="px-4 py-8 md:px-16 lg:px-32 md:py-10">
                <Image
                  src={paper.hal}
                  alt={paper.title}
                  className="rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
