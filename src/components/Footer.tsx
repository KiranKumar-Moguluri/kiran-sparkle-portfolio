import React from 'react';
import { ArrowUp, Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:mogulurikirankumar@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:2702437985',
      label: 'Phone'
    },
    {
      icon: Github,
      href: 'https://github.com/KiranKumar-Moguluri/',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kiranmog/',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Kiran Kumar Moguluri</h3>
            <p className="text-muted-foreground mb-4">
              .NET Developer • AWS Cloud Engineer • Full-Stack Developer
            </p>
            <p className="text-sm text-muted-foreground">
              Building scalable, cloud-native, AI-assisted solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
            
            {/* Resume Links */}
            <div className="space-y-2">
              <a
                href="/assets/Kiran_Kumar_Moguluri_Resume.pdf"
                download
                className="block text-sm text-primary hover:text-primary-glow transition-colors duration-200"
              >
                Download Resume
              </a>
              <a
                href="/assets/Kiran_Kumar_Moguluri_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Open resume in new tab
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0 flex items-center">
            <span>© 2024 Kiran Kumar Moguluri. Built with</span>
            <Heart className="w-4 h-4 mx-1 text-destructive" />
            <span>and React</span>
          </div>
          
          {/* Back to top button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;