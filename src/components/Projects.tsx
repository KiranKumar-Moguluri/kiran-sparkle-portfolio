import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import myjobmediaImage from '@/assets/myjobmedia-mockup.jpg';
import urbandashxImage from '@/assets/urbandashx-mockup.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'myjobmedia',
      title: 'MyJobMedia',
      description: 'Cross-platform community job/task posting app with real-time features',
      longDescription: 'A comprehensive job and task posting application built with React Native, featuring Firebase backend integration, Google Maps API for location services, and Stripe payment processing. The app enables users to post jobs, find tasks, and connect with service providers in their local community.',
      tech: ['React Native', 'Firebase', 'Google Maps API', 'Stripe', 'Redux'],
      image: myjobmediaImage,
      liveUrl: 'https://myjobmedia.netlify.app',
      codeUrl: 'https://github.com/KiranKumar-Moguluri/idanda-app',
      color: 'primary'
    },
    {
      id: 'urbandashx',
      title: 'UrbanDashX',
      description: 'AI-assisted rideshare and food delivery platform',
      longDescription: 'A modern rideshare and food delivery application featuring AI-powered route optimization, real-time tracking, and seamless payment integration. Built with React/Next.js frontend and AWS microservices architecture for scalability and performance.',
      tech: ['React', 'Next.js', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'AI/ML'],
      image: urbandashxImage,
      liveUrl: null,
      codeUrl: 'https://github.com/KiranKumar-Moguluri/urbanfoodride',
      color: 'secondary'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <motion.div 
                  className="glass-card p-8 h-full group-hover:glow-primary transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Real Project Image */}
                  <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project mockup`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        size="sm"
                        className="glow-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(project.codeUrl, '_blank')}
                      variant="secondary"
                      size="sm"
                      className="glow-violet"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in-up">
          <Button
            onClick={() => window.open('https://github.com/KiranKumar-Moguluri?tab=repositories', '_blank')}
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass-card border-glass-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl gradient-text">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Real Project Image */}
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={`${selectedProject.title} detailed view`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project details */}
                <div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <Button
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="glow-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                      variant="secondary"
                      className="glow-violet"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;