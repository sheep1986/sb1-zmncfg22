import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function InteractiveCursor() {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x * window.innerWidth - 8,
        y: mousePosition.y * window.innerHeight - 8,
        scale: 1.5,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      style={{
        background: 'radial-gradient(circle at center, #FF0099, transparent)',
        boxShadow: '0 0 20px #FF0099',
      }}
    />
  );
}