"use client";
import React, { useEffect, useRef } from "react";
import { Label } from "../elements/label";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ArrowUpRight } from "lucide-react";
import { FillButton } from "../elements/fill-button";

gsap.registerPlugin(ScrollTrigger, SplitText);
export const IntroAboutUs = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paragraphSplit = new SplitText(descriptionRef.current, {
      type: "lines, words",
      linesClass: "line",
      wordsClass: "word",
    });

    // Animate each line separately
    paragraphSplit.lines.forEach((line) => {
      // Get all words within this specific line
      const wordsInLine = line.querySelectorAll(".word");

      gsap.fromTo(
        wordsInLine,
        {
          color: "#9ca3af", // gray
        },
        {
          color: "#000000", // black
          scrollTrigger: {
            trigger: line, // the line triggers the animation
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
          stagger: 0.2, // words within the line stagger
        },
      );
    });
  });

  return (
    <div className="p-15">
      <Label title={"About Us"} />
      <div className="description">
        <p
          ref={descriptionRef}
          className="text-gray-500 text-[64px] w-[60vw] leading-[1.1] font-light mt-8"
        >
          We specialise in creating museums, exhibitionobjects, and
          architectural models, regardless oftheir complexity. We stand out for
          our creativeapproach and the level of detail in miniatures.
        </p>
      </div>
     <FillButton title={"About Us"} />
    </div>
  );
};
