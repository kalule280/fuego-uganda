import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-section-gap bg-[#0d234a] mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="md:col-span-4 flex flex-col gap-4">
          <Logo className="h-14 self-start" inverted={true} />
          <p className="text-body-md font-body-md text-[#dfe8ff]/80 max-w-sm mt-2">© 2026 Fuego Uganda Limited. All rights reserved.</p>
        </div>
        
        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 md:justify-end">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-label-md font-label-md mb-2">Locations</span>
            <Link to="#" className="text-[#dfe8ff]/80 hover:text-white hover:underline transition-all text-body-md font-body-md">Kira HQ</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-label-md font-label-md mb-2">Contact Us</span>
            <a href="tel:+256707635706" className="text-[#dfe8ff]/80 hover:text-white hover:underline transition-all text-body-md font-body-md flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span> 0707635706
            </a>
            <a href="mailto:Fuegouganda@gmail.com" className="text-[#dfe8ff]/80 hover:text-white hover:underline transition-all text-body-md font-body-md flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span> Fuegouganda@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-label-md font-label-md mb-2">Legal</span>
            <Link to="#" className="text-[#dfe8ff]/80 hover:text-white hover:underline transition-all text-body-md font-body-md">Privacy Policy</Link>
            <Link to="#" className="text-[#dfe8ff]/80 hover:text-white hover:underline transition-all text-body-md font-body-md">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-margin-mobile pt-8 md:px-margin-desktop">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="text-[clamp(1.8rem,2vw,2.8rem)] font-black tracking-[-0.04em] text-[#f2c94c]">Social Media</h3>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#1d1d1d] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V7.2c0-.9.3-1.5 1.6-1.5H17V2.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.4-4.1 4.1V10H8v3h2.5v8h3z" />
              </svg>
            </a>

            <a href="#" aria-label="YouTube" className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#1d1d1d] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2.1C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.4A2.9 2.9 0 0 0 2.4 7.2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2.1c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.9 2.9 0 0 0 2-2.1C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#1d1d1d] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5-3.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
              </svg>
            </a>

            <a href="#" aria-label="Vimeo" className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#1d1d1d] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <span className="text-2xl font-black leading-none">V</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
