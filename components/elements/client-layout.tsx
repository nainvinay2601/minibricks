"use client";
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./Navbar";
import Lenis from "lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialise lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // sync lenis with scrollTrigger

    lenis.on("scroll", ScrollTrigger.update); // tell scrollTrigger to update on lenis scroll

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    }); // gsap tivker instead of requestAnimationFrame

    gsap.ticker.lagSmoothing(0); // disable gsap lagSmoothing

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Stop/start lenis during menu toggle
  useEffect(() => {
    if (lenisRef.current) {
      if (isMenuOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
    </>
  );
};
