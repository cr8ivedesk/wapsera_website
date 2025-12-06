import { useState } from 'react';
import { Home, Users, Grid3x3, Briefcase, DollarSign, MessageCircle, X, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialPanelOpen, setIsSocialPanelOpen] = useState(false);

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Plan and publish posts, Reels, and stories to your pages effortlessly.',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Schedule posts, Reels, and carousels to keep your feed active and engaging.',
    },
    {
      name: 'Google Business',
      icon: Briefcase,
      description: 'Keep your business visible with scheduled updates and posts.',
    },
    {
      name: 'Google Business',
      icon: Briefcase,
      description: 'Share updates and articles across your profiles and company pages.',
    },
    {
      name: 'Pinterest',
      icon: Grid3x3,
      description: 'Plan and publish Pins to all your boards with ease.',
    },
    {
      name: 'TikTok',
      icon: Users,
      description: 'Schedule videos and Shorts to grow your TikTok presence automatically.',
    },
    {
      name: 'Twitter / X',
      icon: X,
      description: 'Plan tweets, retweets, and quote posts to stay active every day.',
    },
    {
      name: 'Youtube',
      icon: Youtube,
      description: 'Schedule videos and Shorts to all your channels in advance.',
    },
  ];

  const navItems = [
    { label: 'Features', icon: Grid3x3, href: '#products' },
    { label: 'Social', icon: Home, href: '#social-networks', onClick: () => setIsSocialPanelOpen(true) },
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
      {/* Desktop Navigation - Hidden on mobile, stays visible above social panel */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] hidden md:block">
        <div className="bg-white/30 backdrop-blur-[40px] border border-black/10 rounded-full px-6 py-3">
          <div className="flex items-center space-x-2">
            <a href="#home" className="group relative px-4 py-2 text-sm font-normal text-black transition-colors">
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></span>
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsSocialPanelOpen(true)}
              onMouseLeave={() => setIsSocialPanelOpen(false)}
            >
              <button className="group relative px-4 py-2 text-sm font-medium font-normal text-black transition-colors">
                Social
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full transition-opacity ${isSocialPanelOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
              </button>
              {/* Invisible bridge to prevent dropdown from closing when moving mouse to panel - narrow width only */}
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 top-full"></div>
            </div>
            <a href="#features" className="group relative px-4 py-2 text-sm font-medium font-normal text-black transition-colors">
              Features
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href="#about" className="group relative px-4 py-2 text-sm font-medium font-normal text-black transition-colors">
              About
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href="#pricing" className="group relative px-4 py-2 text-sm font-medium font-normal text-black transition-colors">
              Pricing
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href="#contact" className="group relative px-4 py-2 text-sm font-medium font-normal text-black transition-colors">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
              <span className="flex items-center gap-3">
                Try it for free
                <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                  <ArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Social Platforms Slide-Up Panel - Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[35] md:z-[60] transition-opacity duration-300 ${isSocialPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsSocialPanelOpen(false)}
      />

      {/* Social Platforms Slide-Up Panel */}
      <div
        onMouseEnter={() => setIsSocialPanelOpen(true)}
        onMouseLeave={() => setIsSocialPanelOpen(false)}
        className={`fixed left-0 right-0 md:left-5 md:right-5 z-[40] md:z-[70] bg-white rounded-t-3xl md:rounded-3xl shadow-2xl transition-all duration-500 ease-out ${isSocialPanelOpen ? 'bottom-[72px] md:bottom-24' : 'bottom-0 translate-y-full'
          }`}
      >
        {/* Arrow pointing down to the Social nav link - only on desktop */}
        <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2" style={{ marginLeft: '-230px' }}>
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white drop-shadow-md"></div>
        </div>
        <div className="px-6 md:px-0 pt-6 pb-8 max-h-[70vh] overflow-y-auto mb-12 md:mb-0">
          {/* Close Button - Mobile only */}
          <button
            onClick={() => setIsSocialPanelOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10 md:hidden"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header */}
          <div className="mb-4 md:max-w-7xl md:mx-auto md:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-black">Social Networks</h2>
            <p className="text-sm text-gray-600 mt-1">Choose your platform to get started</p>
          </div>

          {/* Social Platforms - List on mobile, compact grid on desktop */}
          <div className="space-y-1 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 mt-6 md:max-w-7xl md:mx-auto md:px-16">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSocialPanelOpen(false);
                  }}
                  className="block py-3 md:py-4 border-b border-gray-100 last:border-0 md:border-0 hover:bg-gray-50 md:hover:bg-green-50 -mx-6 px-6 md:mx-0 md:px-4 md:rounded-lg transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 group-hover:bg-green-100 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">
                        {platform.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
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
                <h3 className="text-base font-bold text-black mb-1">
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
