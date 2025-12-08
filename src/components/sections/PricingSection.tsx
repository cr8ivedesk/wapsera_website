import { Check, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // State for hover direction offsets
  const [cardOffsets, setCardOffsets] = useState<{ [key: number]: { x: number; y: number } }>({
    0: { x: 0, y: 0 },
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
  });

  // Handle mouse enter - detect direction
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Get cursor position relative to card
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    // Get card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate direction from center
    const deltaX = cursorX - centerX;
    const deltaY = cursorY - centerY;

    let offsetX = 0;
    let offsetY = 0;

    // Determine which side cursor entered from
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Left or Right
      offsetX = deltaX > 0 ? 10 : -10;
    } else {
      // Top or Bottom
      offsetY = deltaY > 0 ? 10 : -10;
    }

    setCardOffsets(prev => ({
      ...prev,
      [index]: { x: offsetX, y: offsetY }
    }));
  };

  // Handle mouse leave - reset offset
  const handleMouseLeave = (index: number) => {
    setCardOffsets(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

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
    const cards = cardsRef.current?.querySelectorAll('.pricing-card-wrapper');

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
    <section ref={sectionRef} className="relative py-12 lg:py-12 xl:py-16 overflow-hidden">
      {/* Container for side margins */}
      <div className="container xl:max-w-[1250px] xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-sm lg:text-base text-foreground/60">Pricing Plan</p>
            <AnimatedHeading
              tag="h2"
              text="Flexible Plans for Every Brand and Creator."
              className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl lg:max-w-2xl xxl:max-w-3xl font-extrabold leading-tight text-foreground"
            />
          </div>

          {/* Get Started Button */}
          <Button className="group bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-4 pl-4 text-lg rounded-full">
            <span className="flex items-center gap-3">
              {/* Text slide animation */}
              <span className="relative overflow-hidden h-[1.2em]">
                <span className="flex flex-col transition-transform duration-200 delay-100 ease-out group-hover:-translate-y-1/2">
                  <span className="h-[1.2em] leading-[1.2em]">Get Started</span>
                  <span className="h-[1.2em] leading-[1.2em]">Get Started</span>
                </span>
              </span>
              <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full overflow-hidden">
                <ArrowUpRight className="text-white" />
              </span>
            </span>
          </Button>
        </div>

        {/* Pricing Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            // Outer wrapper - has float animation
            <div
              key={index}
              className="pricing-card-wrapper animate-float"
              style={{
                willChange: 'transform',
                userSelect: 'none',
                touchAction: 'none',
                cursor: 'grab',
              }}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Inner card - moves based on hover direction */}
              <div
                className="pricing-card bg-card border border-border rounded-3xl lg:rounded-4xl p-6 lg:p-8 drop-shadow-md h-full"
                style={{
                  transform: cardOffsets[index]?.x || cardOffsets[index]?.y
                    ? `translateX(${cardOffsets[index].x}px) translateY(${cardOffsets[index].y}px)`
                    : 'none',
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Plan Header */}
                <div className="mb-4 lg:mb-5">
                  <p className="text-normal text-dark">{plan.name}</p>
                  <h3 className="text-xl lg:text-2xl xxl:text-3xl font-extrabold mb-6">{plan.subtitle}</h3>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl lg:text-5xl xl:text-5xl font-bold text-[#9CE335]">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Choose Plan Button */}
                <Button className="group/btn w-full bg-black hover:bg-primary text-primary hover:text-black lg:text-lg 2xl:text-xl xxl:text-xl font-semibold py-5 lg:py-6 rounded-[30px] mb-4 lg:mb-5 flex items-center justify-between px-4 transition-all duration-300 ease-out hover:scale-[1.02]">
                  <span className="flex-1 text-center ms-5">Choose Plan</span>
                  <span className="w-5 h-5 lg:w-5 lg:h-5 2xl:w-7 2xl:h-7 rounded-full bg-primary group-hover/btn:bg-black flex-shrink-0 transition-colors duration-300"></span>
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="font-semibold text-black text-lg mb-4">Include:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm lg:text-base xl:text-lg text-dark font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;