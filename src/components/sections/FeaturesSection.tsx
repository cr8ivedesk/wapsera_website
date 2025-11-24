import { Target, Edit, CalendarCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading'; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.feature-card');

      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95 // Added slight scale for a "pop" effect
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15, // Slightly faster stagger
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Triggers a bit earlier
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Simplify',
      subtitle: 'your workflow',
      color: 'bg-primary',
    },
    {
      icon: Edit,
      title: 'Customize',
      subtitle: 'your social media posts',
      color: 'bg-primary',
    },
    {
      icon: CalendarCheck,
      title: 'Automate',
      subtitle: 'your social media posts',
      color: 'bg-primary',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pb-16 sm:py-16 lg:py-24 xxl:py-32 bg-background"
    >
      <div className="container xxl:max-w-[1700px] 2xl:max-w-[1600px]">

        {/* Section Heading */}
        <div className="text-center mb-16 xxl:mb-18 space-y-6">
          <AnimatedHeading 
            tag="h2"
            text="More time for essentials via social media automation"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl xxl:text-6xl font-[1200] leading-[1.15] tracking-tight max-w-4xl xxl:max-w-6xl mx-auto"
          />

          <p className="text-lg md:text-lg xxl:text-2xl text-muted-foreground max-w-4xl xxl:max-w-5xl mx-auto leading-relaxed">
            Stop letting social media management drain your time. With WapSera, manage all your platforms from one place, automate your posts, and focus on what really matters — growing your brand.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xxl:gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card flex items-center gap-5 xxl:gap-8 bg-card border border-border/60 p-6 lg:p-8 xxl:p-10 rounded-3xl hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Box */}
                <div
                  className={`
                    ${feature.color} 
                    w-14 h-14 lg:w-16 lg:h-16 xxl:w-20 xxl:h-20 
                    rounded-2xl xxl:rounded-3xl 
                    flex items-center justify-center 
                    shrink-0
                    shadow-inner
                  `}
                >
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 text-primary-foreground" />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-xl lg:text-2xl xxl:text-3xl font-extrabold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base xxl:text-xl font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;