import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '@/assets/logo/wapsera-final-white.png';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const wapseraTextRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Animate footer sections
    const sections = footerRef.current?.querySelectorAll('.footer-section');

    if (sections) {
      gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!wapseraTextRef.current) return;

    const rect = wapseraTextRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const footerLinks = {
    company: [
      { label: 'Home', href: '#' },
      { label: 'Social Networks', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    product: [
      { label: 'Start Free Trial', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Plan Details', href: '#' },
      { label: 'New Features', href: '#' },
      { label: 'Android App', href: '#' },
      { label: 'iOS App', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Training Videos', href: '#' },
      { label: 'Cancellation', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
    features: [
      { label: 'Facebook Scheduler', href: '#' },
      { label: 'Instagram Scheduler', href: '#' },
      { label: 'Google Business Scheduler', href: '#' },
      { label: 'LinkedIn Scheduler', href: '#' },
      { label: 'Pinterest Scheduler', href: '#' },
      { label: 'TikTok Scheduler', href: '#' },
      { label: 'Twitter/X Scheduler', href: '#' },
      { label: 'Youtube Scheduler', href: '#' },
    ],
  };

  return (
    <footer ref={footerRef} className="bg-[#000000] text-white pt-16 rounded-t-[30px]">
      <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8 lg:gap-12 mb-12 lg:mb-16">

          {/* Logo and Social */}
          <div className="footer-section col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 text-center lg:text-left">
            <div className="mb-6 lg:mb-8 flex items-center justify-center lg:items-start lg:justify-start">
              <img src={logo} alt="Wapsera Logo" className="h-[100px] xl:h-[150px] w-auto" />
            </div>
            <div className="flex flex-col gap-2 lg:ms-10 xl:ms-16">
              <a
                href="#"
                className="text-xl font-normal hover:text-primary text-white hover:tracking-wider duration-300"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="text-xl font-normal hover:text-primary text-white hover:tracking-wider duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xl font-normal hover:text-primary text-white hover:tracking-wider duration-300"
              >
                Google
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section text-center lg:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base font-normal text-white hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="footer-section text-center lg:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Product</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base font-normal text-white hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section text-center lg:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Support</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base font-normal text-white hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div className="footer-section text-center lg:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Features</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base font-normal text-white hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 lg:pt-8 pb-4 md:pb-0 text-center">
          <p className="text-sm lg:text-base text-gray-300">
            © 2025 Wapsera.com. All Rights Reserved.
          </p>
        </div>

      </div>
      {/* Large WAPSERA Text with Cursor-Following Gradient */}
      <div className="w-screen overflow-hidden pb-20 md:pb-0">
        <style>{`
            .wapsera-text {
              font-size: clamp(6rem, 22vw, 20rem);
              font-weight: 900;
              line-height: 0.85;
              letter-spacing: -0.05em;
              text-align: center;
              cursor: pointer;
              display: block;
              width: 100%;
              user-select: none;
              position: relative;
              padding: 0;
              margin: 0;
              transition: all 0.3s ease;
              background: linear-gradient(180deg, #0F0F0F 0%, #1b1b1bff 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .wapsera-text.hovering {
              background: radial-gradient(
                circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                #9CE335 0%,
                #7BC428 15%,
                #5AA51D 25%,
                #4a4a4a 40%,
                #2a2a2a 60%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              filter: drop-shadow(0 0 20px rgba(156, 227, 53, 0.2));
            }

            @media (max-width: 1024px) {
              .wapsera-text {
                font-size: clamp(5rem, 20vw, 16rem);
              }
            }

            @media (max-width: 768px) {
              .wapsera-text {
                font-size: clamp(4rem, 18vw, 12rem);
                letter-spacing: -0.03em;
              }
            }

            @media (max-width: 480px) {
              .wapsera-text {
                font-size: clamp(3rem, 16vw, 8rem);
              }
            }
          `}</style>
        <div className="w-full translate-y-1/2">
          <h2
            ref={wapseraTextRef}
            className={`wapsera-text ${isHovering ? 'hovering' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              '--mouse-x': `${mousePosition.x}%`,
              '--mouse-y': `${mousePosition.y}%`,
            } as React.CSSProperties}
          >
            WAPSERA
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
