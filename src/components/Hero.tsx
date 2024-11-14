import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BackgroundEffects from './hero/BackgroundEffects';
import HeroContent from './hero/HeroContent';
import CustomCursor from './hero/CustomCursor';

export default function Hero() {
  const { scrollY } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth parallax effects
  const yRange = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useSpring(yRange, { stiffness: 50, damping: 30 });
  const opacity = useSpring(opacityRange, { stiffness: 50, damping: 30 });

  // Mouse movement effects
  const mouseXSpring = useSpring(0, { stiffness: 50, damping: 30 });
  const mouseYSpring = useSpring(0, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.1;
      const moveY = (clientY - window.innerHeight / 2) * 0.1;
      mouseXSpring.set(moveX);
      mouseYSpring.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <BackgroundEffects
        springY={y}
        springOpacity={opacity}
        mouseXSpring={mouseXSpring}
        mouseYSpring={mouseYSpring}
      />
      <HeroContent isLoaded={isLoaded} />
      <div className="hidden md:block">
        <CustomCursor />
      </div>
    </div>
  );
}