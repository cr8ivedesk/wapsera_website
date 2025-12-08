import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-20 right-6 lg:right-8 z-50
        w-12 h-12 lg:w-14 lg:h-14
        bg-primary hover:bg-primary/90
        text-black
        rounded-full
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        hover:scale-110
      `}
            aria-label="Back to top"
        >
            <ArrowUp className="w-6 h-6 lg:w-7 lg:h-7" />
        </button>
    );
};

export default BackToTop;
