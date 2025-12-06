import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      }
    );

    // Animate pricing cards with directional animations
    const cards = cardsRef.current?.querySelectorAll('.pricing-card');

    if (cards) {
      // Set initial state for all cards to prevent flash
      gsap.set(cards, { opacity: 0 });

      // Left card - slide from left
      gsap.fromTo(
        cards[0],
        { opacity: 0, x: -80, y: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Center card - slide from bottom
      gsap.fromTo(
        cards[1],
        { opacity: 0, x: 0, y: 80 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Right card - slide from right
      gsap.fromTo(
        cards[2],
        { opacity: 0, x: 80, y: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }
  }, []);

  const plans = [
    {
      name: 'Starter Plan',
      subtitle: 'For Small Brands',
      price: '$49',
      features: [
        'Up to 3 Campaigns / Month',
        'Creator Database Access',
        'Basic Analytics Dashboard',
        'Email Support',
      ],
    },
    {
      name: 'Professional Plan',
      subtitle: 'For Large Brands',
      price: '$149',
      features: [
        'Up to 3 Campaigns / Month',
        'Creator Database Access',
        'Basic Analytics Dashboard',
        'Email Support',
      ],
    },
    {
      name: 'Enterprise Plan',
      subtitle: 'For Enterprise Brands',
      price: 'Custom',
      isCustom: true,
      features: [
        'Up to 3 Campaigns / Month',
        'Creator Database Access',
        'Basic Analytics Dashboard',
        'Email Support',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 xxl:py-24 overflow-hidden bg-background">
      {/* Container for side margins */}
      <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-sm lg:text-base text-foreground/60">Pricing Plan</p>
            <AnimatedHeading
              tag="h2"
              text="Flexible Plans for Every Brand and Creator."
              className="text-3xl md:text-4xl lg:text-5xl xxl:text-6xl lg:max-w-2xl xxl:max-w-3xl font-extrabold leading-tight text-foreground"
            />
          </div>

          {/* Get Started Button */}
          <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 pl-6 text-lg rounded-full">
            <span className="flex items-center gap-3">
              Get Started
              <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                    <ArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
            </span>
          </Button>
        </div>

        {/* Pricing Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card bg-card border border-border rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-10 drop-shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              {/* Plan Header */}
              <div className="mb-6 lg:mb-8">
                <p className="text-normal text-foreground/60 mb-1">{plan.name}</p>
                <h3 className="text-xl lg:text-2xl xxl:text-3xl font-extrabold mb-6">{plan.subtitle}</h3>

                {/* Price */}
                <div className="mb-6">
                  <span className='text-5xl lg:text-5xl font-bold text-[#9CE335]'>
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Choose Plan Button */}
              <Button className="w-full bg-foreground hover:bg-foreground/90 text-green-500 font-semibold py-4 lg:py-7 rounded-full mb-6 lg:mb-8 flex items-center justify-center gap-2">
                Choose Plan
                <ArrowRight className="w-5 h-5 rounded-full bg-primary text-primary-foreground p-1" />
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                <p className="font-semibold text-foreground mb-4">Include:</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm lg:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
