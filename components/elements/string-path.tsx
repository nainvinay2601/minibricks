"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export const StringPath = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const container = containerRef.current;
    
    if (!path || !svg || !container) return;
    
    const updatePath = () => {
      const width = container.offsetWidth;
      const midX = width / 2;
      const originalD = `M 0 10 Q ${midX} 10 ${width} 10`;
      
      svg.setAttribute('width', width.toString());
      path.setAttribute('d', originalD);
      
      return { width, midX, originalD };
    };
    
    let { width, midX, originalD } = updatePath();
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      if (mouseX >= 0 && mouseX <= width && mouseY >= -50 && mouseY <= 100) {
        // Follow cursor directly - no inversion
        gsap.to(path, {
          attr: { 
            d: `M 0 10 Q ${midX} ${mouseY} ${width} 10` 
          },
          duration: 0.8,
          ease: "elastic.out(1, 0.3)" // 3 bounces
        });
      }
    };
    
    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: originalD },
        duration: 1,
        ease: "elastic.out(1, 0.3)", // 3 bounces
        repeat: 2, // bounce 3 times total
        yoyo: true
      });
    };
    
    const handleResize = () => {
      const result = updatePath();
      width = result.width;
      midX = result.midX;
      originalD = result.originalD;
    };
    
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    
    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <svg 
        ref={svgRef}
        width="100%" 
        height="100" 
        className="overflow-visible"
      >
        <path 
          ref={pathRef}
          d="M 0 10 L 100 10" 
          stroke="#9ca3af"
          strokeWidth="1" 
          fill="none"
        />
      </svg>
    </div>
  );
}