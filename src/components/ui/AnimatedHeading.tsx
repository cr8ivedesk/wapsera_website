import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils'; // Assuming you have a class merger (shadcn standard), or just use template literals

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'; // Allow different tags
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className, 
  tag: Tag = 'h2' // Default to h2 if not specified
}) => {
  const componentRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        '.char',
        {
          opacity: 0,
          x: -20,           // Coming from left
          filter: 'blur(10px)', // Start blurry
        },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)', // Sharp
          duration: 1,
          stagger: 0.03,      // Smooth ripple per letter
          ease: 'power2.out',
          scrollTrigger: {
            trigger: componentRef.current,
            start: 'top 85%', // Starts when heading hits 85% of viewport
            toggleActions: 'play none none none', // Play once
          },
        }
      );

    }, componentRef);

    return () => ctx.revert(); // Cleanup
  }, [text]); // Re-run if text changes

  // Logic to split text into words, then characters
  const renderText = () => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="char inline-block opacity-0 will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <Tag ref={componentRef} className={cn("relative", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {renderText()}
      </span>
    </Tag>
  );
};

export default AnimatedHeading;