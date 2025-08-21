import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Skills3D from './SkillsOrb';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = {
    backend: {
      title: 'Backend & APIs',
      skills: ['.NET Core', 'ASP.NET', 'Web API', 'C#', 'Java', 'Spring Boot', 'Node.js'],
      color: 'from-blue-500 to-blue-700'
    },
    frontend: {
      title: 'Frontend & UI',
      skills: ['React', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Redux', 'TypeScript'],
      color: 'from-purple-500 to-purple-700'
    },
    cloud: {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      color: 'from-green-500 to-green-700'
    },
    data: {
      title: 'Data & Storage',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-orange-500 to-orange-700'
    },
    security: {
      title: 'Security & Testing',
      skills: ['OAuth2', 'JWT', 'Swagger', 'NUnit', 'Jest'],
      color: 'from-red-500 to-red-700'
    }
  };

  const categories = Object.keys(skillCategories);
  const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive 3D Skills Orb */}
          <div className="relative animate-fade-in-up order-2 lg:order-1">
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-center gradient-text">
                  Interactive Skills Universe
                </h3>
                {mounted && <Skills3D skills={allSkills} />}
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Click and drag to explore • Auto-rotating skill constellation
                </p>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="animate-fade-in-up order-1 lg:order-2">
            {/* Category Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`p-4 rounded-xl transition-all duration-300 text-left group ${
                    activeCategory === category
                      ? 'glass-card border-primary/30 glow-primary'
                      : 'glass-card hover:glow-primary hover:border-primary/20'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full mb-2 bg-gradient-to-r ${skillCategories[category].color}`}></div>
                  <h4 className="font-semibold text-sm">{skillCategories[category].title}</h4>
                  <p className="text-xs text-muted-foreground">{skillCategories[category].skills.length} skills</p>
                </button>
              ))}
            </div>

            {/* Active Skills Display */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}></div>
                <h3 className="text-xl font-semibold gradient-text">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Proficiency Bars */}
            <div className="mt-8 glass-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 gradient-text">Proficiency Levels</h4>
              <div className="space-y-4">
                {['Expert', 'Advanced', 'Intermediate'].map((level, index) => {
                  const width = [95, 85, 75][index];
                  const color = ['from-green-500 to-green-600', 'from-blue-500 to-blue-600', 'from-purple-500 to-purple-600'][index];
                  return (
                    <div key={level} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{level}</span>
                        <span className="text-muted-foreground">{width}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out animate-scale-in`}
                          style={{ 
                            width: `${width}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Core Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: '.NET Core', icon: '🟣', desc: 'Enterprise APIs' },
              { name: 'React', icon: '⚛️', desc: 'Modern UI' },
              { name: 'AWS', icon: '☁️', desc: 'Cloud Platform' },
              { name: 'Docker', icon: '🐳', desc: 'Containerization' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-card p-6 rounded-xl group hover:glow-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="font-semibold mb-1">{tech.name}</h4>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;