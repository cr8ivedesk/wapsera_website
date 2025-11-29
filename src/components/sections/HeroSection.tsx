import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage from '@/assets/hero-image.png';
import AnimatedHeading from '../ui/AnimatedHeading';

const HeroSection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CTA Animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    // Added xxl:pt-32 and xxl:pb-28 to give more breathing room on giant screens
    <section className="relative min-h-screen flex items-center pt-24 pb-16 xxl:pt-36 xxl:pb-28">
      <div className="container xxl:max-w-[1700px] 2xl:max-w-[1600px]">

        {/* Adjusted gap for xxl screens */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xxl:gap-24 items-center">

          {/* Left content */}
          <div className="space-y-8 xxl:space-y-10">

            <AnimatedHeading
              tag="h1"
              text="Schedule Powerful Content, Reach More People and Save Hours Every Week."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl xxl:text-[5rem] font-[1200] leading-[1.1] tracking-tighter text-foreground"
            />

            <div ref={ctaRef} className="space-y-6 xxl:space-y-8 opacity-0">
              <a
                href="#"
                // Scaled CTA text for XXL
                className="text-[#89D51B] text-2xl md:text-3xl xxl:text-4xl font-semibold flex items-center gap-2 hover:gap-4 transition-all underline"
              >
                Watch Demo Video
              </a>

              <p className="text-lg md:text-xl xxl:text-2xl text-gray-700">
                No credit card required.
              </p>

              {/* Scaled Button for XXL */}
              <Button className="btn-jump bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
                <span className="btn-jump-text flex items-center gap-3">
                  Start Free Account
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </span>
                <span className="btn-jump-duplicate flex items-center gap-3">
                  Start Free Account
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </span>
              </Button>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Excited woman with hashtag symbol"
                className="w-full h-auto object-cover mt-5 sm:mt-0"
              />
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/20 rounded-full blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;