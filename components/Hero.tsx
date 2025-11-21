import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/studio_dark/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-black/20 to-studio-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <FadeIn delay={200} direction="up">
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-300 mb-4">
            Photography & Art Direction
          </h2>
        </FadeIn>
        
        <FadeIn delay={400} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-semibold text-white mb-8 tracking-tight leading-none">
            Capture <span className="italic font-light text-zinc-400">The</span> Unseen
          </h1>
        </FadeIn>

        <FadeIn delay={600} direction="up">
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            ChrisY Studio creates visual narratives that transcend the ordinary. 
            Modern aesthetics met with timeless emotion.
          </p>
        </FadeIn>

        <FadeIn delay={800} direction="up">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
              View Portfolio
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Get in Touch
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;