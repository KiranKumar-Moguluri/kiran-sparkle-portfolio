import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mogulurikirankumar@gmail.com',
      href: 'mailto:mogulurikirankumar@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Kiran%2C'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(270) 243-7985',
      href: 'tel:2702437985'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Denton, TX 76205, USA',
      href: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'KiranKumar-Moguluri',
      href: 'https://github.com/KiranKumar-Moguluri/'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'kiranmog',
      href: 'https://www.linkedin.com/in/kiranmog/'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for reaching out. I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const mailtoUrl = `mailto:mogulurikirankumar@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.open(mailtoUrl, '_blank');
      
      toast({
        title: 'Opening email client...',
        description: 'Your default email client should open with the message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or have a question? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:glow-primary transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact button */}
            <Button
              onClick={() => window.open('mailto:mogulurikirankumar@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Kiran%2C', '_blank')}
              size="lg"
              className="w-full glow-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Quick Email
            </Button>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-muted"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-muted"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-muted resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-primary"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;