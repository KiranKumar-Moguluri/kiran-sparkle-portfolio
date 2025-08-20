import React from 'react';
import { Code, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Robust APIs & Microservices',
      description: 'Building scalable backend solutions with .NET Core and modern architecture patterns'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Solutions',
      description: 'Leveraging AWS services for secure, high-performance, and cost-effective deployments'
    },
    {
      icon: Zap,
      title: 'Modern Frontend & DevOps',
      description: 'Creating responsive UIs with React/Angular and automating CI/CD pipelines'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Kiran</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              I build robust APIs, microservices, and cloud architectures with .NET/AWS; deliver secure, 
              high-performance front ends with React/Angular; automate CI/CD and IaC with GitHub Actions, 
              Azure DevOps, Terraform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center group hover:glow-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default About;