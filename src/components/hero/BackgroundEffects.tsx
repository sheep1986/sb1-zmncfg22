import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import MatrixRain from './MatrixRain';
import ParticleSystem from './ParticleSystem';
import GradientSpheres from './GradientSpheres';

interface BackgroundEffectsProps {
  springY: MotionValue<number>;
  springOpacity: MotionValue<number>;
  mouseXSpring: MotionValue<number>;
  mouseYSpring: MotionValue<number>;
}

export default function BackgroundEffects({ 
  springY, 
  springOpacity,
  mouseXSpring,
  mouseYSpring 
}: BackgroundEffectsProps) {
  const mousePosition = useMousePosition();

  return (
    <motion.div 
      style={{ y: springY, opacity: springOpacity }} 
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Enhanced 3D Grid - Hidden on mobile */}
      <motion.div 
        className="absolute inset-0 hidden md:block"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 0, 153, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 0, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `perspective(1000px) 
                       rotateX(60deg) 
                       scale(2.5) 
                       translateZ(0px)`,
            x: mouseXSpring,
            y: mouseYSpring,
          }}
        />
      </motion.div>

      {/* Simplified mobile background */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

      {/* Animated overlay gradients - Simplified on mobile */}
      <motion.div
        className="absolute inset-0 opacity-30 md:opacity-100"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255,0,153,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(255,0,153,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(255,0,153,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(255,0,153,0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Matrix effect - Hidden on mobile */}
      <div className="hidden md:block">
        <MatrixRain />
      </div>

      {/* Particles - Reduced on mobile */}
      <div className="opacity-50 md:opacity-100">
        <ParticleSystem mousePosition={mousePosition} />
      </div>

      {/* Gradient spheres - Hidden on mobile */}
      <div className="hidden md:block">
        <GradientSpheres mouseXSpring={mouseXSpring} mouseYSpring={mouseYSpring} />
      </div>

      {/* Animated noise texture - Reduced opacity on mobile */}
      <motion.div
        className="absolute inset-0 opacity-[0.01] md:opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}