import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';
import socialMediaAutomation from '@/assets/automation_Images/socialMediaAutomation.png';
import contentPlanning from '@/assets/automation_Images/contentPlanning.png';
import vector1 from '@/assets/automation_Images/vector_1.png';
import vector2 from '@/assets/automation_Images/vector_2.png';
import vector3 from '@/assets/automation_Images/vector_3.png';
import vector4 from '@/assets/automation_Images/vector_4.png';

gsap.registerPlugin(ScrollTrigger);

const AutomationSection = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate first section (Social Media Automation)
    gsap.fromTo(
      content1Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top 60%',
        },
      }
    );

    gsap.fromTo(
      image1Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top 60%',
        },
      }
    );

    // Animate second section (Content Planning)
    gsap.fromTo(
      content2Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 60%',
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section className="relative py-12 lg:py-12 xl:py-16 overflow- animate-float">
      {/* Container for side margins */}
      <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left Card - Social Media Automation */}
          <div ref={section1Ref} className="relative bg-[#FFF8F0] rounded-3xl lg:rounded-[2.5rem] py-10 lg:py-10 px-6 lg:px-8 xl:px-8 xl:py-10 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2 hover:scale-[1.01]">
            {/* Content - Positioned at Top */}
            <div ref={content1Ref} className="space-y-5 lg:space-y-6 mb-10 lg:mb-8 xl:mb-8">
              {/* Tag */}
              <div className="inline-block bg-black px-5 py-2 rounded-full font-semibold text-primary">
                Social media management
              </div>

              {/* Heading with Animation */}
              <AnimatedHeading
                tag="h2"
                text="Save time, stay consistent, and boost results with automated social media management."
                className="text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl xxl:text-4xl font-bold leading-tight text-black"
              />

              {/* Description */}
              <p className="text-base lg:text-base text-black leading-relaxed">
                Save time and reduce the stress of managing multiple platforms. Stay consistent with your posts and maintain a strong online presence. Automate your social media workflow with WapSera and focus on growing your brand.
              </p>

              {/* CTA Button */}
              <Button className="group bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-4 pl-4 text-lg rounded-full">
                <span className="flex items-center gap-3">
                  {/* Text slide animation */}
                  <span className="relative overflow-hidden h-[1.2em]">
                    <span className="flex flex-col transition-transform duration-200 delay-100 ease-out group-hover:-translate-y-1/2">
                      <span className="h-[1.2em] leading-[1.2em]">Learn More</span>
                      <span className="h-[1.2em] leading-[1.2em]">Learn More</span>
                    </span>
                  </span>
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                    <ArrowUpRight className="text-white" />
                  </span>
                </span>
              </Button>
            </div>

            {/* Image with Vectors - Positioned Below Content */}
            <div ref={image1Ref} className="relative">
              {/* Main Image with Teal Background */}
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden pt-8 lg:pt-10 xl:px-10 flex justify-center">
                <img
                  src={socialMediaAutomation}
                  alt="Social media automation mockup"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative Vectors */}
              {/* Vector 1: Top-left with gap */}
              <div className="absolute -top-6 -left-2 lg:-top-2 lg:-left-2 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                <img
                  src={vector1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 2: Left-center */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-4 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                <img
                  src={vector2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 3: Top-right with gap */}
              <div className="absolute -top-6 -right-6 lg:-top-0 lg:-right-6 w-16 h-10 lg:w-20 lg:h-12">
                <img
                  src={vector3}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 4: Bottom-right with gap */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-2 lg:-right-6 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                <img
                  src={vector4}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Card - Content Planning */}
          <div ref={section2Ref} className="relative bg-[#F0FFF4] rounded-3xl lg:rounded-[2.5rem] py-10 lg:py-10 px-6 lg:px-8 xl:px-8 xl:py-10 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 hover:scale-[1.01]">
            {/* Content - Positioned at Top */}
            <div ref={content2Ref} className="space-y-5 lg:space-y-6 mb-10 lg:mb-12">
              {/* Tag */}
              <div className="inline-block bg-black px-5 py-2 rounded-full font-semibold text-primary">
                Content Planning
              </div>

              {/* Heading with Animation */}
              <AnimatedHeading
                tag="h2"
                text="Manage all your platforms efficiently and optimize your content for maximum impact."
                className="text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl xxl:text-4xl font-bold leading-tight text-black"
              />

              {/* Description */}
              <p className="text-base lg:text-base text-black leading-relaxed">
                Take full control of your social media presence across all platforms. Plan, schedule, and optimize your content to reach the right audience. With WapSera, your posts work smarter, engage more, and deliver maximum impact.
              </p>

              {/* CTA Button */}
              <Button className="group bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-4 pl-4 text-lg rounded-full">
                <span className="flex items-center gap-3">
                  {/* Text slide animation */}
                  <span className="relative overflow-hidden h-[1.2em]">
                    <span className="flex flex-col transition-transform duration-200 delay-100 ease-out group-hover:-translate-y-1/2">
                      <span className="h-[1.2em] leading-[1.2em]">Learn More</span>
                      <span className="h-[1.2em] leading-[1.2em]">Learn More</span>
                    </span>
                  </span>
                  <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                    <ArrowUpRight className="text-white" />
                  </span>
                </span>
              </Button>
            </div>

            {/* Image with Vectors - Positioned Below Content */}
            <div ref={image2Ref} className="relative">
              {/* Main Image with Teal Background */}
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden pt-8 lg:pt-10 xl:px-10 flex justify-center">
                <img
                  src={contentPlanning}
                  alt="Social media automation mockup"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative Vectors */}
              {/* Vector 1: Top-left with gap */}
              <div className="absolute -top-6 -left-2 lg:-top-2 lg:-left-2 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                <img
                  src={vector1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 2: Left-center */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-4 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
                <img
                  src={vector2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 3: Top-right with gap */}
              <div className="absolute -top-6 -right-6 lg:-top-0 lg:-right-6 w-16 h-10 lg:w-20 lg:h-12">
                <img
                  src={vector3}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vector 4: Bottom-right with gap */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-2 lg:-right-6 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
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

export default AutomationSection;
