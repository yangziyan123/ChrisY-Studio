import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-studio-black relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's Create Together.</h2>
              <p className="text-xl text-zinc-400 mb-12 font-light">
                Have a project in mind? We are currently accepting bookings for the upcoming season. Reach out to discuss your vision.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Studio</h4>
                  <p className="text-white">123 Creative Avenue<br/>Design District, NY 10012</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Connect</h4>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <a 
                        key={link.platform} 
                        href={link.url} 
                        className="p-2 border border-zinc-800 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={200}>
              <form className="space-y-8 bg-zinc-900/30 p-8 md:p-12 backdrop-blur-sm border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative z-0">
                    <input 
                      type="text" 
                      id="name" 
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input 
                      type="email" 
                      id="email" 
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" 
                      placeholder=" " 
                      required 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative z-0">
                  <select 
                    id="service" 
                    className="block py-2.5 px-0 w-full text-sm text-zinc-400 bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white focus:text-white peer"
                  >
                    <option className="bg-zinc-900">Select Service...</option>
                    <option className="bg-zinc-900">Portrait Session</option>
                    <option className="bg-zinc-900">Brand Narrative</option>
                    <option className="bg-zinc-900">Editorial / Commercial</option>
                    <option className="bg-zinc-900">Other</option>
                  </select>
                </div>

                <div className="relative z-0">
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none" 
                    placeholder=" " 
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-zinc-500"
                  >
                    Tell us about your project
                  </label>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;