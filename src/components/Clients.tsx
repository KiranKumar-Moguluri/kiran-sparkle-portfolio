import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: 'First National Bank',
      logo: '/assets/clients/first-national-bank.svg',
      description: 'Enterprise Banking Solutions'
    },
    {
      name: 'IHX Private Limited',
      logo: '/assets/clients/ihx.svg',
      description: 'Healthcare Technology Platform'
    },
    {
      name: 'NTT DATA',
      logo: '/assets/clients/nttdata.svg',
      description: 'Digital Transformation Solutions'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted By <span className="gradient-text">Leading Organizations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering enterprise-grade solutions across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center group hover:glow-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Placeholder for logo - will be replaced with actual logos */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">
                  {client.name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Clients;