import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dashboardImage from '../images/fuegostoves dashboard.jpeg';
import miniStoveImage from '../images/ministove.jpg';
import doubleStoveImage from '../images/double stove (2).jpg';
import solarAidedImage from '../images/solar aided.jpg';

const Home = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    const handleUserChange = () => {
      const stored = localStorage.getItem('user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('userChanged', handleUserChange);
    return () => window.removeEventListener('userChanged', handleUserChange);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate w-full overflow-hidden bg-[#071b46]">
        <div className="absolute inset-0">
          <img src={dashboardImage} alt="Fuego stove dashboard" className="h-full w-full object-cover object-center opacity-100 brightness-[1]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,70,0.42)_0%,rgba(7,27,70,0.32)_28%,rgba(7,27,70,0.18)_48%,rgba(7,27,70,0.08)_100%)]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">
          <div className="flex min-h-[620px] items-center">
            <div className="max-w-xl pb-8 pt-8 md:pt-10">
              <span className="inline-flex items-center rounded-full bg-[#f97316] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(249,115,22,0.38)]">Clean energy innovation</span>
              <h1 className="mt-6 text-[clamp(2.8rem,4.8vw,5rem)] font-black leading-[0.9] tracking-[-0.065em] text-white">Powering Sustainable Kitchens Across Uganda.</h1>
              <p className="mt-6 max-w-[33rem] text-lg leading-relaxed text-white/80 md:text-xl">Our advanced charcoal stoves, eco-briquettes, and thermal stone systems maximize heat output while solar integration cuts energy costs—significantly lowering fuel expenses for households and enterprise clients across Uganda.</p>

              <div className="mt-6 h-2.5 w-full max-w-md overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[65%] rounded-full bg-[#f97316]"></div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-white">
                <span className="text-base font-semibold md:text-lg">65% Reduction in Fuel Usage</span>
                <span className="text-base opacity-80 md:text-lg">(45% Target)</span>
                <span className="text-base font-semibold text-[#f9c784] md:text-lg">78% Efficiency</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {user ? (
                  <Link to="/categories" className="inline-flex items-center gap-2 rounded-md bg-[#ed3c2d] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(237,60,45,0.35)] transition-all hover:bg-[#ff5346]">
                    View Products
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                ) : (
                  <>
                    <button onClick={() => window.dispatchEvent(new Event('openSignup'))} className="inline-flex items-center gap-2 rounded-md bg-[#ed3c2d] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(237,60,45,0.35)] transition-all hover:bg-[#ff5346]">
                      Sign up
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                    <button onClick={() => window.dispatchEvent(new Event('openSignin'))} className="rounded-md border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="w-full bg-surface py-12 border-b border-surface-variant">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <p className="text-center text-label-md font-label-md text-secondary mb-8 uppercase tracking-widest">Trusted by Enterprise Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="flex items-center gap-2 font-headline-md text-headline-md text-secondary"><span className="material-symbols-outlined text-[32px]">apartment</span> EcoCorp</div>
            <div className="flex items-center gap-2 font-headline-md text-headline-md text-secondary"><span className="material-symbols-outlined text-[32px]">factory</span> GlobalTech</div>
            <div className="flex items-center gap-2 font-headline-md text-headline-md text-secondary"><span className="material-symbols-outlined text-[32px]">energy_savings_leaf</span> GreenInitiative</div>
            <div className="flex items-center gap-2 font-headline-md text-headline-md text-secondary"><span className="material-symbols-outlined text-[32px]">verified</span> QualityAssurance</div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-6 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-4">Powering Sustainable Kitchens Across Uganda.</h2>
          <p className="text-body-lg font-body-lg text-secondary">Built entirely for local households and institutions, our engineered cookstoves slash harmful emissions, lower daily fuel expenses, and drive community resilience.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
            <div className="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.05em] text-[#0f172a]">65%</div>
            <div className="mt-3 text-lg font-semibold text-[#2d3748]">Fuel Savings</div>
          </div>
          <div className="rounded-xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
            <div className="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.05em] text-[#0f172a]">45%</div>
            <div className="mt-3 text-lg font-semibold text-[#2d3748]">Target Efficiency Goal</div>
          </div>
          <div className="rounded-xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
            <div className="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.05em] text-[#0f172a]">78%</div>
            <div className="mt-3 text-lg font-semibold text-[#2d3748]">Thermal Stone Retention</div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-white py-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(2.1rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#2d3748] mb-2">Engineered for Performance.</h2>
              <p className="text-[1.05rem] text-[#667085] leading-relaxed">Discover our range of high-efficiency stoves and solar aided stoves built for demanding enterprise environments.</p>
            </div>
            <Link to="/categories" className="text-[0.95rem] font-medium text-[#2d3748] hover:text-[#1b2637] flex items-center gap-2 group transition-colors">
              View Full Catalog
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f7fa] rounded-2xl border border-[#dfe6ee] overflow-hidden shadow-[0_1px_0_rgba(15,23,42,0.02)] transition-all duration-300 flex flex-col">
              <div className="mini-stove-rotate relative w-full aspect-[4/3] bg-[#eef3f8] flex items-center justify-center p-0 overflow-hidden border-b border-[#dfe6ee]">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-[#dff3f5] text-[#1d7f8c] text-[9px] font-semibold px-2 py-1 rounded-full uppercase tracking-[0.12em]">High Efficiency</span>
                </div>
                <img alt="Mini Stove" className="mini-stove-image w-full h-full object-cover object-center drop-shadow-[0_14px_20px_rgba(15,23,42,0.12)] transition-transform duration-500" src={miniStoveImage} />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-[#2d3748] mb-2">Mini Stove</h3>
                <p className="text-[0.95rem] text-[#667085] mb-5 flex-grow leading-relaxed">Portable for use with high standard</p>
                <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-4">UGX 60,000</div>
                <button className="w-full border border-[#d0d9e4] bg-white text-[#2d3748] hover:border-[#8aa6c3] hover:text-[#1d3550] text-[0.82rem] font-medium uppercase tracking-[0.08em] py-3 rounded-lg transition-colors">Request Quote</button>
              </div>
            </div>

            <div className="bg-[#f5f7fa] rounded-2xl border border-[#dfe6ee] overflow-hidden shadow-[0_1px_0_rgba(15,23,42,0.02)] transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-[#eef3f8] flex items-center justify-center p-0 overflow-hidden border-b border-[#dfe6ee]">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-[#eaf6e9] text-[#398b5d] text-[9px] font-semibold px-2 py-1 rounded-full uppercase tracking-[0.12em]">Eco-Friendly</span>
                </div>
                <img alt="Double Stove" className="w-full h-full object-cover object-center drop-shadow-[0_14px_20px_rgba(15,23,42,0.12)] group-hover:scale-[1.03] transition-transform duration-500" src={doubleStoveImage} />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-[#2d3748] mb-2">Double Stove</h3>
                <p className="text-[0.95rem] text-[#667085] mb-5 flex-grow leading-relaxed">Having two burners for fast cooking</p>
                <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-4">UGX 250,000</div>
                <button className="w-full border border-[#d0d9e4] bg-white text-[#2d3748] hover:border-[#8aa6c3] hover:text-[#1d3550] text-[0.82rem] font-medium uppercase tracking-[0.08em] py-3 rounded-lg transition-colors">Request Quote</button>
              </div>
            </div>

            <div className="bg-[#f5f7fa] rounded-2xl border border-[#dfe6ee] overflow-hidden shadow-[0_1px_0_rgba(15,23,42,0.02)] transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-[#eef3f8] flex items-center justify-center p-0 overflow-hidden border-b border-[#dfe6ee]">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-[#dff3f5] text-[#1d7f8c] text-[9px] font-semibold px-2 py-1 rounded-full uppercase tracking-[0.12em]">Eco-Friendly</span>
                </div>
                <img alt="Solar aid" className="w-full h-full object-cover object-center drop-shadow-[0_14px_20px_rgba(15,23,42,0.12)] group-hover:scale-[1.03] transition-transform duration-500" src={solarAidedImage} />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-[#2d3748] mb-2">Solar aid</h3>
                <p className="text-[0.95rem] text-[#667085] mb-5 flex-grow leading-relaxed">Stove with solar for easy cooking and its fast during the process</p>
                <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-4">UGX 600,000</div>
                <button className="w-full border border-[#d0d9e4] bg-white text-[#2d3748] hover:border-[#8aa6c3] hover:text-[#1d3550] text-[0.82rem] font-medium uppercase tracking-[0.08em] py-3 rounded-lg transition-colors">Request Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
