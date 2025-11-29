import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';
import ctaMan from '@/assets/CTA_Section_Images/cta-man.png';
import EllipseCircle from '@/assets/CTA_Section_Images/Ellipse-Circle.png';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate first CTA section
    gsap.fromTo(
      sectionRef.current?.querySelectorAll('.animate-item'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <>
      {/* Dark CTA Section */}
      <section className="lg:py-24 py-8 bg-dark-bg text-dark-foreground rounded-[50px]">

        <div ref={sectionRef} className="container xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 relative z-10">
          {/* Decorative Ellipse Circle - Top Left for Green Glow */}
          <img
            src={EllipseCircle}
            alt=""
            className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-70 pointer-events-none -translate-x-1/4 -translate-y-1/4"
            style={{ filter: 'blur(20px)' }}
          />
          <div className="grid lg:grid-cols-2 gap-x-16 items-center bg-dark-bg rounded-3xl overflow-hidden">
            {/* Left - Content */}
            <div className="space-y-8 p-8">
              <div className="animate-item">
                <p className="text-green-500 mb-2">Pricing Plan</p>
                <AnimatedHeading
                  tag="h2"
                  text="Let's Make Something Awesome Together"
                  className="text-4xl md:text-5xl font-bold leading-tight"
                />
              </div>

              <p className="animate-item text-lg text-white">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
              </p>

              <div className="animate-item space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl mb-1">Proven Expertise</h3>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl mb-1">Innovation and Adaptability</h3>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl mb-1">Comprehensive Services</h3>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
                  </div>
                </div>
              </div>

              <Button className="animate-item btn-jump bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full">
                <span className="btn-jump-text flex items-center gap-3">
                  Discover More
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </span>
                <span className="btn-jump-duplicate flex items-center gap-3">
                  Discover More
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full -rotate-45 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </span>
              </Button>
            </div>

            {/* Right - Image */}
            <div className="relative h-full min-h-[600px]">
              <img
                src={ctaMan}
                alt="Man with crossed arms"
                className="absolute inset-0 w-full h-full object-contain object-center rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default CTASection;
