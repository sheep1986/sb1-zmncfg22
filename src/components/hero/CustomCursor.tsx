import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const mousePosition = useMousePosition();
  const cursorSize = useSpring(20, { stiffness: 300, damping: 20 });
  const cursorOpacity = useSpring(0.6, { stiffness: 300, damping: 20 });

  const handleMouseEnter = () => {
    cursorSize.set(60);
    cursorOpacity.set(0.8);
  };

  const handleMouseLeave = () => {
    cursorSize.set(20);
    cursorOpacity.set(0.6);
  };

  React.useEffect(() => {
    const handleElements = document.querySelectorAll('a, button, [role="button"]');
    
    handleElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      handleElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x * window.innerWidth,
        y: mousePosition.y * window.innerHeight,
        width: cursorSize,
        height: cursorSize,
        opacity: cursorOpacity,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
      style={{
        translateX: '-50%',
        translateY: '-50%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255,0,153,0.5), transparent 70%)',
        filter: 'blur(5px)',
      }}
    />
  );
}