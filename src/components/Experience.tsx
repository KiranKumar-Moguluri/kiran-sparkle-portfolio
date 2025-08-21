import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'First National Bank',
      role: 'Software Developer',
      duration: 'May 2023 – Present',
      location: 'Remote',
      description: 'Developing enterprise banking solutions with .NET Core, implementing secure APIs, and optimizing cloud infrastructure on AWS.',
      color: 'primary'
    },
    {
      company: 'IHX Private Limited',
      role: 'Software Engineer',
      duration: 'Dec 2021 – Jan 2023',
      location: 'Remote',
      description: 'Built healthcare management systems using microservices architecture, React frontend, and containerized deployments.',
      color: 'secondary'
    },
    {
      company: 'NTT DATA',
      role: 'Software Engineer',
      duration: 'Feb 2020 – Dec 2021',
      location: 'Remote',
      description: 'Engineered industrial automation software solutions with .NET, implemented CI/CD pipelines, and mentored junior developers.',
      color: 'accent'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building enterprise solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-in-left`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 glow-primary"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-8 group hover:glow-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{exp.role}</h3>
                    <h4 className="text-xl text-secondary mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;