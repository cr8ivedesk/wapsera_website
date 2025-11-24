import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '../ui/AnimatedHeading';
import WhyChooseUsImage from '@/assets/whyChooseUs_Section_Images/why_choose_us.png';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate image from left
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

        // Animate content from right
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

    const features = [
        'Easy Booking',
        'On-Time Delivery Rate Improvement',
        'Advanced Technology',
        'Fleet Expansion and Modernization',
    ];

    return (
        <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden bg-background">
            {/* Container for side margins */}
            <div className="container xxl:max-w-[1700px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 xxl:px-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xxl:gap-20 items-center">

                    {/* Left - Image */}
                    <div ref={imageRef} className="relative">
                        <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden">
                            <img
                                src={WhyChooseUsImage}
                                alt="Woman with megaphone"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div ref={contentRef} className="space-y-6 lg:space-y-8">
                        {/* Tag and Heading */}
                        <div className="space-y-4">
                            <p className="text-sm lg:text-base text-foreground/60">Why Choose Us</p>
                            <AnimatedHeading
                                tag="h2"
                                text="Unleash the Full Potential of Your Startup Business."
                                className="text-3xl md:text-4xl lg:text-5xl xxl:text-6xl font-extrabold leading-tight text-foreground"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                        </p>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 lg:w-4 lg:h-4 text-primary-foreground" />
                                    </div>
                                    <span className="text-normal lg:text-base font-extrabold text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Button className="btn-jump bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full mt-2">
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

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;