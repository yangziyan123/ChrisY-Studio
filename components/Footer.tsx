import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-serif font-bold">{BRAND_NAME}.</span>
          <p className="text-zinc-600 text-xs mt-1">© {new Date().getFullYear()} ChrisY Studio. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6 text-xs uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;