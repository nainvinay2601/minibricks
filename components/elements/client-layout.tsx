"use client";
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./Navbar";
import Lenis from "lenis";

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
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
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
