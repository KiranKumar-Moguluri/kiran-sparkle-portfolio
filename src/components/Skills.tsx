import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend & APIs',
      skills: [
        '.NET Core', 'ASP.NET', 'Web API', 'C#', 'Java', 'Spring Boot', 'Node.js'
      ]
    },
    frontend: {
      title: 'Frontend & UI',
      skills: [
        'React', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Redux', 'TypeScript'
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, Lambda, RDS, API Gateway)', 'Azure', 'GCP', 'Docker', 
        'Kubernetes', 'Terraform', 'CI/CD (GitHub Actions, Jenkins, Azure DevOps)'
      ]
    },
    data: {
      title: 'Data & Storage',
      skills: [
        'SQL Server', 'PostgreSQL', 'MongoDB', 'Redis'
      ]
    },
    security: {
      title: 'Security & Testing',
      skills: [
        'OAuth2', 'JWT', 'Swagger/OpenAPI', 'NUnit', 'Jest/Jasmine/Karma'
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise across modern technologies and platforms
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground glow-primary'
                  : 'glass-card hover:glow-primary'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
              {skillCategories[activeCategory].title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Skill Cloud (decorative) */}
        <div className="mt-16 relative h-64 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {[...Array(20)].map((_, i) => {
                const angle = (i / 20) * 360;
                const radius = 120 + Math.sin(i) * 20;
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-glow"
                    style={{
                      left: `${50 + Math.cos((angle * Math.PI) / 180) * radius / 2}%`,
                      top: `${50 + Math.sin((angle * Math.PI) / 180) * radius / 2}%`,
                      animationDelay: `${i * 200}ms`,
                      animationDuration: `${2 + (i % 3)}s`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;