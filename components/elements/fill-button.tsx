"use client";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface FillButtonProps {
  title: string;
}

export const FillButton = ({ title }: FillButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = button?.querySelector(".button-fill");

    if (button && fill) {
      button.addEventListener("mouseenter", () => {
        gsap.to(fill, {
          clipPath: "circle(150% at 50% 100%)", // expands from center
          duration: 1.5,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(fill, {
          clipPath: "circle(0% at 50% 100%)", // shrinks to center
          duration: 0.75,
          ease: "power3.in",
        });
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative overflow-hidden border border-[#cdcdcd] rounded-full px-8 py-4 text-[24px] tracking-tight w-fit flex items-center gap-3 text-black mt-10 group"
    >
      {/* Fill starts as a circle at 0% */}
      <span
        className="button-fill absolute inset-0 bg-black z-0"
        style={{ clipPath: "circle(0% at 50% 100%)" }}
      ></span>

      <span className="relative z-10 group-hover:text-white transition-colors duration-500">
        {title}
      </span>
      <ArrowUpRight
        className="relative z-10 group-hover:text-white transition-colors duration-500"
        color="#e93b05"
      />
    </button>
  );
};
