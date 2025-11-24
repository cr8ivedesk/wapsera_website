import { Facebook, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaTiktok } from 'react-icons/fa';
import logo from '@/assets/white-logo.png';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

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
    <footer ref={footerRef} className="bg-dark-bg text-dark-foreground py-16 lg:py-20">
      <div className="container xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">

          {/* Logo and Social */}
          <div className="footer-section col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6 lg:mb-8">
              <img src={logo} alt="Wapsera Logo" className="h-auto w-auto" />
            </div>
            <div className="flex gap-3 lg:gap-4">
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </a> */}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg lg:text-lg text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Product</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg lg:text-lg text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Support</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg lg:text-lg text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div className="footer-section">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Features</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg lg:text-lg text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 lg:pt-8 text-center">
          <p className="text-sm lg:text-base text-gray-500">
            © 2025 Wapsera.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
