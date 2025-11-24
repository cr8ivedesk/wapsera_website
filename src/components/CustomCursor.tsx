import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = { default: { x: mousePosition.x - 6, y: mousePosition.y - 6, scale: 1, }, hover: { x: mousePosition.x - 6, y: mousePosition.y - 6, scale: 1.2, }, };

  const outerVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.8,
    },
  };

  return (
    <>
      {/* Outer Green Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#32CD32] rounded-full pointer-events-none z-[9999]"
        variants={outerVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          mass: 0.1,
        }}
      />

      {/* Inner dot */} <motion.div className="fixed top-0 left-0 w-3 h-3 bg-green-900 rounded-full pointer-events-none z-[9999]" variants={variants} animate={cursorVariant} transition={{ type: 'spring', stiffness: 500, damping: 28, }} />
    </>
  );
};

export default CustomCursor;
