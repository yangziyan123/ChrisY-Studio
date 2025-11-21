import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';
import Button from './Button';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-studio-gray">
      <div className="container mx-auto px-6">
        
        <FadeIn direction="up" className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Investment</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Transparent pricing for professional quality. Choose the package that best fits your visual needs.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 150} className="h-full">
              <div className={`h-full p-8 md:p-10 flex flex-col border transition-all duration-500 relative group ${
                service.popular 
                  ? 'bg-zinc-900 border-zinc-700 transform md:-translate-y-4 shadow-2xl shadow-black' 
                  : 'bg-transparent border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50'
              }`}>
                
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold uppercase tracking-widest py-1 px-3">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                <p className="text-zinc-500 text-sm mb-6 h-10">{service.description}</p>
                
                <div className="text-4xl font-light mb-8 text-white">
                  {service.price}
                </div>

                <ul className="flex-grow space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <Check size={16} className="mr-3 mt-0.5 text-zinc-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? 'primary' : 'outline'} 
                  className="w-full mt-auto"
                >
                  Book Now
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;