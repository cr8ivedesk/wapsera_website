import { createContext, useContext, useEffect, ReactNode, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        // Ultra smooth configuration
        const lenisInstance = new Lenis({
            duration: 1.6,
            easing: (t) => {
                // Custom bezier-like easing for buttery smooth scrolling
                return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            },
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.7,
            touchMultiplier: 1.2,
            infinite: false,
        });

        setLenis(lenisInstance);

        // Connect to GSAP ticker for perfect frame sync
        const tickerCallback = (time: number) => {
            lenisInstance.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        // Update ScrollTrigger on scroll
        lenisInstance.on('scroll', () => {
            ScrollTrigger.update();
        });

        // Handle window resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        // Initial refresh
        ScrollTrigger.refresh();

        // Cleanup
        return () => {
            gsap.ticker.remove(tickerCallback);
            window.removeEventListener('resize', handleResize);
            lenisInstance.destroy();
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={lenis}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScrollProvider;