
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';
import dashboardMockup from '@/assets/dashboard_images/dashboard.png';
import vector1 from '@/assets/dashboard_images/vector_1.png';
import vector2 from '@/assets/dashboard_images/vector_2.png';
import vector3 from '@/assets/dashboard_images/vector_3.png';
import vector4 from '@/assets/dashboard_images/vector_4.png';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DashboardSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative lg:py-18 overflow-hidden">
      {/* Purple background container - narrower width */}
      <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        <div className="bg-[#F9F6FF] rounded-3xl lg:rounded-[2.5rem] px-6 lg:px-12 xxl:px-16 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xxl:gap-20 items-center relative">

            {/* Left - Dashboard mockup */}
            <div ref={imageRef} className="relative">
              {/* Main Dashboard Image with Orange Border */}
              <div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden p-4 lg:p-5 transition-transform duration-500">
                <img
                  src={dashboardMockup}
                  alt="Dashboard mockup"
                  className="w-full h-auto rounded-[1.5rem] lg:rounded-[2rem]"
                />
              </div>

              {/* Decorative Vector Elements */}
              {/* Vector 1: Top-left - Behind image */}
              <div className="absolute -top-4 -left-4 lg:-top-4 lg:-left-4 -z-10 w-20 h-20 lg:w-24 lg:h-24">
                <img
                  src={vector1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 3: Below the image - Eye/Circle element */}
              <div className="absolute -bottom-12 left-4 lg:-bottom-16 lg:left-6 w-16 h-16 lg:w-20 lg:h-20 z-10">
                <img
                  src={vector3}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div ref={contentRef} className="space-y-5 lg:space-y-6 relative">
              {/* Vector 2: Above content - Dotted pattern - Moved up and left */}
              <div className="absolute -top-12 -right-4 lg:-top-16 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 z-10">
                <img
                  src={vector2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Tag */}
              <div className="inline-block bg-foreground px-5 py-2 rounded-full font-semibold text-green-500">
                Social media management
              </div>

              {/* Heading with Animation */}
              <AnimatedHeading
                tag="h2"
                text="A powerful and flexible social media tool built to adapt to your goals, your platforms, and your way of working."
                className="text-2xl md:text-2xl lg:text-3xl xxl:text-4xl font-bold leading-tight text-foreground"
              />

              {/* Description */}
              <p className="text-normal leading-relaxed max-w-2xl">
                Plan your posts, automate your workflow, and keep every channel active. Stay consistent across platforms without the stress of manual posting. WapSera keeps you organized while your content works for you.
              </p>

              {/* CTA Button */}
              <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
                <span className="flex items-center gap-3">
                  Learn More
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                    <ArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Button>

              {/* Vector 4: Below content at corner - Wavy/zigzag line */}
              <div className="absolute -bottom-8 -right-4 lg:-bottom-12 lg:-right-8 w-20 h-12 lg:w-28 lg:h-16 z-10">
                <img
                  src={vector4}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
