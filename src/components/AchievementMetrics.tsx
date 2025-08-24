import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Code, Coffee, GitBranch, Zap } from 'lucide-react';

const AchievementMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metrics = [
    {
      icon: Code,
      value: 50000,
      suffix: '+',
      label: 'Lines of Code',
      description: 'Written with precision and quality',
      color: 'primary',
      duration: 2000
    },
    {
      icon: Users,
      value: 15,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Delivered successful projects',
      color: 'secondary',
      duration: 1500
    },
    {
      icon: GitBranch,
      value: 200,
      suffix: '+',
      label: 'Git Commits',
      description: 'This year alone',
      color: 'accent',
      duration: 1800
    },
    {
      icon: Coffee,
      value: 1200,
      suffix: '+',
      label: 'Cups of Coffee',
      description: 'Fuel for innovation',
      color: 'success',
      duration: 2200
    },
    {
      icon: Zap,
      value: 99,
      suffix: '%',
      label: 'Uptime',
      description: 'Production systems reliability',
      color: 'warning',
      duration: 1600
    },
    {
      icon: Award,
      value: 4,
      suffix: '+',
      label: 'Certifications',
      description: 'Industry recognized credentials',
      color: 'info',
      duration: 1400
    }
  ];

  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      metrics.forEach((metric, index) => {
        let startTime: number;
        const startValue = 0;
        const endValue = metric.value;
        const duration = metric.duration;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = currentValue;
            return newCounters;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    }
  }, [inView, hasAnimated]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Achievement <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that tell the story of dedication and continuous growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center group hover:glow-primary transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${metric.color}/20 mb-6 group-hover:bg-${metric.color}/30 transition-all duration-300`}
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <metric.icon className={`w-8 h-8 text-${metric.color}`} />
              </motion.div>

              {/* Counter */}
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 font-mono">
                  {counters[index].toLocaleString()}{metric.suffix}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="w-full bg-muted/30 rounded-full h-1 overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              >
                <motion.div
                  className={`h-full bg-${metric.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ 
                    duration: metric.duration / 1000, 
                    delay: index * 0.1 + 0.7,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default AchievementMetrics;