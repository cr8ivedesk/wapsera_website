import { useState } from 'react';
import { Home, Users, Grid3x3, Briefcase, DollarSign, MessageCircle, X } from 'lucide-react';

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', icon: Grid3x3, href: '#products' },
    { label: 'Services', icon: Home, href: '#services' },
    { label: 'Contact Us', icon: MessageCircle, href: '#chat', isCenter: true },
    { label: 'Pricing', icon: DollarSign, href: '#pricing' },
    { label: 'More', icon: Users, href: '#more', onClick: () => setIsMenuOpen(true) },
  ];

  const menuLinks = [
    { title: 'Home', subtitle: 'Home is where the monk lives', href: '#home' },
    { title: 'About us', subtitle: 'The journey of Design Monks', href: '#about' },
    { title: 'Meet the team', subtitle: 'An overview of the Monk family', href: '#team' },
    { title: 'Blogs', subtitle: 'A collection of informative blogs', href: '#blogs' },
    { title: 'Career', subtitle: 'Work with top global brands, grow your skills', href: '#career' },
    { title: 'Contact us', subtitle: 'Start your dream design journey from here', href: '#contact' },
  ];

  const handleMenuLinkClick = (href: string) => {
    setIsMenuOpen(false);
    window.location.hash = href;
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-transparent border border-black/10 rounded-full px-6 py-3">
          <div className="flex items-center space-x-2">
            <a href="#home" className="px-4 py-2 rounded-full text-sm font-medium bg-black/90 text-green-500">Home</a>
            <a href="#social-networks" className="px-4 py-2 rounded-full text-sm font-medium text-green-500 hover:bg-black/10">Social</a>
            <a href="#features" className="px-4 py-2 rounded-full text-sm font-medium text-green-500 hover:bg-black/10">Features</a>
            <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium text-green-500 hover:bg-black/10">About</a>
            <a href="#pricing" className="px-4 py-2 rounded-full text-sm font-medium text-green-500 hover:bg-black/10">Pricing</a>
            <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium text-green-500 hover:bg-black/10">Contact</a>
          </div>
        </div>
      </div>

      {/* Sliding Menu Overlay - Below bottom nav so nav stays clear */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[35] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sliding Menu Panel - Slides from behind bottom nav */}
      <div
        className={`fixed left-0 right-0 z-[40] md:hidden bg-white rounded-t-3xl shadow-2xl transition-all duration-500 ease-out ${isMenuOpen ? 'bottom-[72px]' : 'bottom-0 translate-y-full'
          }`}
      >
        <div className="px-6 pt-6 pb-8 max-h-[70vh] overflow-y-auto mb-12">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Menu Links */}
          <div className="space-y-1 mt-8 mb-4">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuLinkClick(link.href);
                }}
                className="block py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-6 px-6 transition-colors"
              >
                <h3 className="text-base font-bold text-foreground mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Visible only on mobile, stays on top */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-dark-bg border-t border-gray-800 px-4 pb-safe">
          <div className="relative flex items-center justify-around py-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              if (item.isCenter) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    className="relative -mt-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-dark-bg" />
                    </div>
                  </a>
                );
              }

              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    } else {
                      setActiveIndex(index);
                      window.location.hash = item.href;
                    }
                  }}
                  className="flex flex-col items-center gap-1 min-w-[60px] group"
                >
                  <Icon
                    className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                      }`}
                  />
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                      }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
