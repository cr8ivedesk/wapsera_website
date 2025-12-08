import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Create context for Lenis instance
const SmoothScrollContext = createContext<Lenis | null>(null);

// Hook to access Lenis instance
export const useLenis = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings for ultra-smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Connect Lenis to GSAP's ticker for frame-perfect updates
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's default lag smoothing to prevent conflicts
        gsap.ticker.lagSmoothing(0);

        // Setup ScrollTrigger to use Lenis's scroll position
        ScrollTrigger.scrollerProxy(document.documentElement, {
            scrollTop(value) {
                if (arguments.length) {
                    lenis.scrollTo(value as number, { immediate: true });
                }
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            ScrollTrigger.clearScrollMemory();
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={lenisRef.current}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScrollProvider;
