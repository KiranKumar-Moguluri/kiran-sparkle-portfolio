import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    '.NET Developer',
    'AWS Cloud Engineer',
    'Full-Stack Developer'
  ];

  const counters = [
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 10, label: 'Major Projects', suffix: '+' },
    { value: 4, label: 'Certifications', suffix: '+' }
  ];

  // Animated counters
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts(prev => prev.map((count, index) => {
        const target = counters[index].value;
        if (count < target) {
          return Math.min(count + 1, target);
        }
        return count;
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [counts]);

  // Typing animation
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let currentIndex = 0;

    if (isTyping) {
      const typingTimer = setInterval(() => {
        if (currentIndex <= currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
          clearInterval(typingTimer);
        }
      }, 100);

      return () => clearInterval(typingTimer);
    }
  }, [currentRole, isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">I'm </span>
              <span className="gradient-text">Kiran</span>
              <span className="block mt-2">
                I build scalable,
              </span>
              <span className="block">
                cloud-native,
              </span>
              <span className="gradient-text">AI-assisted solutions</span>
            </h1>

            {/* Typing animation */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center lg:justify-start">
              <span className={`type-cursor ${isTyping ? 'typing' : ''}`}>
                {displayText}
              </span>
            </div>

            {/* Animated counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto lg:mx-0">
              {counters.map((counter, index) => (
                <div key={index} className="glass-card p-4 lg:p-6 text-center animate-scale-in">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text mb-2">
                    {counts[index]}{counter.suffix}
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{counter.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="glow-primary text-lg px-8 py-4"
                onClick={() => window.open('/assets/Kiran_Kumar_Moguluri_Resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/KiranKumar-Moguluri?tab=repositories', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 glow-violet"
                onClick={() => window.open('mailto:mogulurikirankumar@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Kiran%2C', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl transform scale-110 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative z-10 max-w-lg mx-auto">
                <img 
                  src="/lovable-uploads/5e95652f-d86b-4c74-99e8-d30b66675671.png"
                  alt="Kiran Kumar Moguluri - Professional Portrait"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl animate-float rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                    backdropFilter: 'blur(10px)'
                  }}
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-10 left-10 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-primary font-bold">.NET</span>
              </div>
              <div className="absolute top-20 right-10 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-secondary font-bold">AWS</span>
              </div>
              <div className="absolute bottom-20 left-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-accent font-bold">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;