import React from 'react';
import { motion } from 'framer-motion';

interface ParticleSystemProps {
  mousePosition: { x: number; y: number };
}

export default function ParticleSystem({ mousePosition }: ParticleSystemProps) {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    velocity: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.25,
    color: i % 3 === 0 ? '#FF0099' : i % 3 === 1 ? '#00FFE0' : '#7000FF'
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            background: `radial-gradient(circle at center, ${particle.color}, transparent 70%)`,
            opacity: particle.opacity,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 20}%`],
            x: [`${particle.x}%`, `${particle.x + (mousePosition.x * 20)}%`],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: 3 / particle.velocity,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}