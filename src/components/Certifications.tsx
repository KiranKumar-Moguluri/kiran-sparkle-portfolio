import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Solutions Architect – Associate',
      year: '2024',
      issuer: 'Amazon Web Services',
      description: 'Designing and deploying scalable, highly available systems on AWS',
      color: 'primary'
    },
    {
      title: 'HackerRank Frontend',
      year: '2025',
      issuer: 'HackerRank',
      description: 'Advanced frontend development skills and best practices',
      color: 'secondary'
    },
    {
      title: 'Full Stack Web Development',
      year: '2021',
      issuer: 'Certified Institution',
      description: 'Comprehensive full-stack development with modern frameworks',
      color: 'accent'
    },
    {
      title: 'Ethical Hacking',
      year: '2019',
      issuer: 'Security Institute',
      description: 'Cybersecurity fundamentals and penetration testing',
      color: 'destructive'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group hover:glow-primary transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">{cert.year}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Certifications;