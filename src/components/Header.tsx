import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';
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
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="container xxl:max-w-[1700px] 2xl:max-w-[1600px] py-4 flex items-center justify-between">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-32 md:w-36 lg:w-40"
        />

        {/* CTA Button */}
        <Button className="btn-jump bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
          <span className="btn-jump-text flex items-center gap-3">
            Try it for free
            <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </span>
          <span className="btn-jump-duplicate flex items-center gap-3">
            Try it for free
            <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Header;

