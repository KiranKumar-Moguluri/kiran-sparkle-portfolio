import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Globe, Shield } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Code, delay: 0, x: '10%', y: '20%' },
    { Icon: Database, delay: 0.5, x: '80%', y: '30%' },
    { Icon: Cloud, delay: 1, x: '20%', y: '70%' },
    { Icon: Cpu, delay: 1.5, x: '90%', y: '80%' },
    { Icon: Globe, delay: 2, x: '5%', y: '50%' },
    { Icon: Shield, delay: 2.5, x: '75%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} className="text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;