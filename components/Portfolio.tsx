import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import FadeIn from './FadeIn';
import { X, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-studio-black min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn fullWidth>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-900 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Works</h2>
              <p className="text-zinc-400">A curation of recent visual stories.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
              {Object.values(ProjectCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                    filter === cat 
                      ? 'text-white border-b border-white pb-1' 
                      : 'text-zinc-600 hover:text-zinc-300 pb-1'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100} fullWidth>
              <div 
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-zinc-400 mb-2">{project.category} — {project.year}</span>
                  <h3 className="text-xl font-serif text-white flex items-center justify-between">
                    {project.title}
                    <ArrowRight size={16} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 transition-opacity duration-300">
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-5xl w-full h-full flex flex-col md:flex-row gap-8 items-center justify-center">
            <img 
              src={selectedProject.imageUrl} 
              alt={selectedProject.title} 
              className="max-h-[80vh] md:max-h-full max-w-full object-contain shadow-2xl shadow-black"
            />
            <div className="text-left md:w-1/3">
              <span className="inline-block px-3 py-1 border border-zinc-800 text-xs uppercase tracking-widest text-zinc-400 mb-4 rounded-full">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif mb-4">{selectedProject.title}</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Captured in {selectedProject.year}. High-resolution detail and artistic direction focused on bringing out the essence of the subject.
              </p>
              <button className="text-white border-b border-zinc-700 pb-1 hover:border-white transition-colors text-sm uppercase tracking-wider">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;