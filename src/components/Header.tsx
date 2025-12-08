import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo/logo.png';
import w_logo from '../assets/logo/wapsera-final-black.png';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show the sticky header after scrolling past initial content
      if (currentScrollY > 100) {
        // Scrolling UP - show header
        if (currentScrollY < lastScrollY.current) {
          setShowHeader(true);
        }
        // Scrolling DOWN - hide header
        else {
          setShowHeader(false);
        }
      } else {
        // Near the top - hide sticky header (original header is visible)
        setShowHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Original Static Header - part of document flow */}
      <nav className="relative top-0 left-0 right-0 z-40 bg-transparent">
        <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] py-4 flex items-center justify-center">
          {/* Mobile Logo - Centered w_logo (visible only on small screens) */}
          <img
            src={w_logo}
            alt="Wapsera Logo"
            className="w-32 md:hidden"
          />

          {/* Desktop Logo (hidden on small screens) */}
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block md:w-36 lg:w-40"
          />
        </div>
      </nav>

      {/* Sticky Header with Glossy Effect - appears on scroll up */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        {/* Glossy backdrop effect - similar to bottom blur */}
        <div className="absolute inset-0 backdrop-blur-[80px] h-48 [mask-image:linear-gradient(to_top,transparent,black)]" />

        {/* Header content */}
        <div className="relative container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] py-4 flex items-center justify-center">
          {/* Mobile Logo - Centered w_logo (visible only on small screens) */}
          <img
            src={w_logo}
            alt="Wapsera Logo"
            className="w-32 md:hidden"
          />

          {/* Desktop Logo (hidden on small screens) */}
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block md:w-36 lg:w-40"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
