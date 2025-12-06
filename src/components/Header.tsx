import { useState, useEffect } from 'react';
import Logo from '../assets/logo/logo.png';
import w_logo from '../assets/logo/wapsera-final-black.png';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white/30 backdrop-blur-[40px]' : 'bg-transparent'}
      `}
    >
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

        {/* CTA Button (hidden on small screens) */}
        {/* <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
          <span className="flex items-center gap-3">
            Try it for free
            <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
              <ArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </Button> */}
      </div>
    </nav>
  );
};

export default Header;

