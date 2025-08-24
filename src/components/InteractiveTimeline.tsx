import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Users, Lightbulb } from 'lucide-react';

const InteractiveTimeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      id: 1,
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'ALTEN',
      location: 'Pune, India',
      duration: 'Aug 2024 - Present',
      type: 'work',
      icon: Building,
      achievements: [
        'Led development of microservices architecture using .NET 8',
        'Implemented CI/CD pipelines with GitHub Actions',
        'Architected cloud-native solutions on AWS',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['.NET 8', 'AWS', 'React', 'Docker', 'Kubernetes'],
      color: 'primary'
    },
    {
      id: 2,
      year: '2023',
      title: 'Software Engineer',
      company: 'ALTEN',
      location: 'Pune, India',
      duration: 'Jun 2023 - Jul 2024',
      type: 'work',
      icon: Building,
      achievements: [
        'Developed RESTful APIs serving 10,000+ daily users',
        'Optimized database queries improving performance by 40%',
        'Integrated third-party services and payment gateways',
        'Collaborated with cross-functional teams using Agile methodology'
      ],
      technologies: ['ASP.NET Core', 'SQL Server', 'Angular', 'Azure DevOps'],
      color: 'secondary'
    },
    {
      id: 3,
      year: '2022',
      title: 'Software Developer',
      company: 'Idanda Technologies',
      location: 'Hyderabad, India',
      duration: 'Aug 2022 - May 2023',
      type: 'work',
      icon: Building,
      achievements: [
        'Built full-stack web applications using React and .NET',
        'Implemented responsive UI/UX designs',
        'Participated in requirement gathering and analysis',
        'Delivered projects within tight deadlines'
      ],
      technologies: ['React', '.NET Core', 'JavaScript', 'CSS3'],
      color: 'accent'
    },
    {
      id: 4,
      year: '2021',
      title: 'AWS Certified',
      company: 'Amazon Web Services',
      location: 'Online',
      duration: 'Dec 2021',
      type: 'certification',
      icon: Award,
      achievements: [
        'AWS Certified Solutions Architect - Associate',
        'AWS Certified Developer - Associate',
        'Deep dive into cloud architecture patterns'
      ],
      technologies: ['AWS', 'Cloud Computing', 'Serverless'],
      color: 'success'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, achievements, and continuous learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                      activeItem === index ? 'glow-primary scale-105' : 'hover:glow-primary'
                    }`}
                    onClick={() => setActiveItem(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-${item.color}/20 mr-3`}>
                        <item.icon className={`w-5 h-5 text-${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{item.duration}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{item.location}</span>
                    </div>

                    {activeItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-3"
                      >
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Lightbulb className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 pt-3">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      activeItem === index ? `bg-${item.color}` : 'bg-muted'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <span className="text-2xl font-bold gradient-text">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline line for mobile */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                
                {/* Timeline node */}
                <div className="absolute left-2 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background"></div>
                
                <div className="glass-card p-4">
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-${item.color}/20 mr-3`}>
                      <item.icon className={`w-4 h-4 text-${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-3">
                    {item.duration} • {item.location}
                  </div>
                  
                  <ul className="space-y-1 text-sm">
                    {item.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <Lightbulb className="w-3 h-3 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;