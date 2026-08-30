import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dashboardImage from '../images/fuegostoves dashboard.jpeg';
import miniStoveImage from '../images/ministove.jpg';
import doubleStoveImage from '../images/double stove (2).jpg';
import solarAidedImage from '../images/solar aided.jpg';

import solar1 from '../images/image/fuego solar.jpg';
import solar2 from '../images/image/fuego solar2.jpg';
import solar3 from '../images/image/fuego Solar 3.jpg';
import solar4 from '../images/image/fuego solar4.jpg';
import hybrid1 from '../images/image/highbrid solar.jpg';
import hybrid2 from '../images/image/highbrid solar2.jpg';
import hybrid3 from '../images/image/highbrid solar3.jpg';
import hybrid4 from '../images/image/highbrid silar4.jpg';
import installed1 from '../images/image/fuego installed solar.jpg';
import installed2 from '../images/image/our installed house.jpg';

import light1 from '../images/image/fuego lights.jpg';
import light2 from '../images/image/fuegolight2.jpg';
import installed3 from '../images/image/our team installing the solar lights.jpg';

import stove1 from '../images/image/fuego stoves ekyoto.jpg';
import stove2 from '../images/image/fuegostoves small19.jpg';
import stove3 from '../images/image/more of small fuego stoves 18.jpg';
import stove4 from '../images/image/fuego16.jpg';

import metal1 from '../images/metal works.jpg';
import metal2 from '../images/metal works3.jpg';
import metal3 from '../images/metal works4.jpg';
import metal4 from '../images/metal works5.jpg';

const AutoSlider = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-full bg-gray-200">
      {images.map((imgSrc, idx) => (
        <img 
          key={idx}
          src={imgSrc}
          alt={`${altText} ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'} hover:scale-105`}
        />
      ))}
    </div>
  );
};

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

  const productsAndServices = [
    {
      id: "solar",
      title: "Solar & Hybrid Systems",
      description: "Reliable solar panels and hybrid setups tailored for home and business energy independence, complete with expert installation.",
      images: [solar1, solar2, solar3, solar4, hybrid1, hybrid2, hybrid3, hybrid4, installed1, installed2],
      alt: "Solar and Hybrid Systems"
    },
    {
      id: "lights",
      title: "Solar Lighting Solutions",
      description: "High-efficiency indoor and outdoor solar lights designed for bright, cost-effective illumination and professional setup.",
      images: [light1, light2, installed3],
      alt: "Solar Lights"
    },
    {
      id: "stoves",
      title: "Clean Cookstoves",
      description: "Durable, eco-friendly cookstoves engineered to reduce fuel consumption, smoke, and household cooking costs.",
      images: [stove1, stove2, stove3],
      alt: "Cookstoves"
    },
    {
      id: "metalwork",
      title: "Metal Work",
      description: "Custom metal fabrication and welding services delivering durable, precision-crafted products for homes, businesses, and industrial applications.",
      images: [metal1, metal2, metal3, metal4],
      alt: "Metal Work"
    }
  ];

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
                <span className="text-base font-semibold md:text-lg">85% Reduction in Fuel Usage</span>
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

      {/* Products and Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Our Products & Services
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Powering homes and businesses across Uganda with sustainable energy products and professional installation services.
            </p>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsAndServices.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100"
              >
                {/* Product Image Container */}
                <div className="h-52 w-full overflow-hidden bg-gray-200">
                  <AutoSlider images={item.images} altText={item.alt} />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <Link 
                    to={`/gallery?category=${item.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1 mt-auto"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
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
            <div className="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.05em] text-[#0f172a]">85%</div>
            <div className="mt-3 text-lg font-semibold text-[#2d3748]">Fuel Savings</div>
          </div>
          <div className="rounded-xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
            <div className="text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.05em] text-[#0f172a]">80%</div>
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
