import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../images/about us.png';
import missionImage from '../images/our mission.jpg';
import efficiencyImage from '../images/our efficiency.jpg';
import ceoImage from '../images/Chief Executive Officer.jpg';
import managerImage from '../images/Manager fuego uganda.jpg';
import localImpactImage from '../images/local impact.jpg';
import integrityImage from '../images/integrity.jpg';

const About = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#071b46]">
        <div className="mx-auto grid min-h-[614px] max-w-7xl items-center gap-8 px-margin-mobile py-10 md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl text-surface-container-lowest lg:pr-4">
            <h1 className="mb-3 text-[clamp(2.1rem,3vw,3.7rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">Engineering Efficiency in All Stoves</h1>
            <p className="mb-3 text-xl font-medium text-white/90 md:text-2xl">Fuego will make you smile.</p>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              At Fuego Uganda Limited, we are committed to revolutionizing energy consumption through innovative, sustainable solutions. Specializing in durable <strong className="font-semibold text-white">charcoal stoves</strong>, clean-burning <strong className="font-semibold text-white">briquettes</strong>, heat-retaining <strong className="font-semibold text-white">thermal stones</strong>, and advanced <strong className="font-semibold text-white">solar stoves</strong>, we deliver a complete energy ecosystem.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Built for local households and institutions across Uganda, our engineered products maximize heat output, slash fuel consumption, and protect our environment while lowering daily operational costs.
            </p>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[18px] border border-white/10 bg-[#071b46] shadow-[0_20px_60px_rgba(7,27,70,0.35)]">
            <img src={aboutUsImage} alt="Fuego Uganda team and stove work" className="h-full w-full object-cover object-center opacity-100 brightness-[0.96]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,70,0.04)_0%,rgba(7,27,70,0.05)_18%,rgba(7,27,70,0.20)_100%)]"></div>
          </div>
        </div>
      </section>

      {/* Mission & Values Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Mission Statement */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden ambient-shadow flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-[55%]">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">bolt</span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Our Mission</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">To provide accessible, highly efficient, and environmentally responsible energy solutions to households and institutions across Uganda and beyond. We believe that robust engineering can solve critical energy challenges.</p>
            </div>
            <div className="md:w-[45%] h-64 md:h-auto bg-surface-variant">
              <img src={missionImage} alt="Our Mission" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Core Value 1 */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-surface-variant transition-all">
            <div className="h-48 w-full bg-surface-variant">
              <img src={integrityImage} alt="Integrity" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center items-start">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">verified_user</span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Integrity</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Uncompromising quality in every product we manufacture.</p>
            </div>
          </div>
          {/* Core Value 2 */}
          <div className="md:col-span-6 bg-surface-container-low rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-surface-variant transition-all">
            <div className="h-48 w-full bg-surface-variant">
              <img src={efficiencyImage} alt="Efficiency" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center items-start">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">speed</span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Efficiency</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Maximizing thermal output while minimizing fuel consumption through advanced thermodynamics.</p>
            </div>
          </div>
          {/* Core Value 3 */}
          <div className="md:col-span-6 bg-surface-container-low rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-surface-variant transition-all">
            <div className="h-48 w-full bg-surface-variant">
              <img src={localImpactImage} alt="Local Impact" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center items-start">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">public</span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Local Impact</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">Empowering local communities by creating jobs and reducing environmental degradation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Our Journey</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">A legacy of innovation in the heart of Uganda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            {/* Decorative Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-secondary-fixed-dim -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 bg-surface-container-lowest p-6 rounded-lg ambient-shadow border border-surface-variant">
              <div className="text-primary text-headline-md font-headline-md font-bold mb-2">2010</div>
              <h4 className="text-label-md font-label-md text-on-surface mb-2 uppercase tracking-wider">Foundation</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Fuego Uganda Limited established in Kampala with a vision for cleaner cooking.</p>
            </div>
            
            <div className="relative z-10 bg-surface-container-lowest p-6 rounded-lg ambient-shadow border border-surface-variant">
              <div className="text-primary text-headline-md font-headline-md font-bold mb-2">2015</div>
              <h4 className="text-label-md font-label-md text-on-surface mb-2 uppercase tracking-wider">Expansion</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Opened state-of-the-art manufacturing facility in Entebbe.</p>
            </div>
            
            <div className="relative z-10 bg-surface-container-lowest p-6 rounded-lg ambient-shadow border border-surface-variant">
              <div className="text-primary text-headline-md font-headline-md font-bold mb-2">2020</div>
              <h4 className="text-label-md font-label-md text-on-surface mb-2 uppercase tracking-wider">Innovation</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Launched our patented high-efficiency industrial stove line.</p>
            </div>
            
            <div className="relative z-10 bg-surface-container-lowest p-6 rounded-lg ambient-shadow border border-surface-variant bg-tertiary-container text-on-tertiary-container">
              <div className="text-on-tertiary-container text-headline-md font-headline-md font-bold mb-2">Today</div>
              <h4 className="text-label-md font-label-md text-on-tertiary-container mb-2 uppercase tracking-wider">Market Leader</h4>
              <p className="text-body-md font-body-md text-on-tertiary-container/80 text-sm">Serving thousands of institutions across East Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Leadership Team</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">The experts engineering our future.</p>
          </div>
          <Link to="#" className="inline-flex items-center gap-2 text-primary font-label-md hover:opacity-80 transition-opacity">
            View Sustainability Report <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="group cursor-pointer text-center">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-surface-variant relative max-w-sm mx-auto">
              <img alt="Baker Lutabi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={ceoImage} />
            </div>
            <h4 className="text-headline-md font-headline-md text-on-surface">Baker Lutabi</h4>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Chief Executive Officer Fuego Uganda</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="group cursor-pointer text-center">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-surface-variant relative max-w-sm mx-auto">
              <img alt="Nantubwe Shana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={managerImage} />
            </div>
            <h4 className="text-headline-md font-headline-md text-on-surface">Nantubwe Shana</h4>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Marketing Manager Fuego Uganda</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container">
        <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-2xl p-8 md:p-12 ambient-shadow border border-surface-variant">
          <div className="text-center mb-10">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Business Inquiries</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Partner with Fuego Uganda Limited for your enterprise energy needs.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-label-md font-label-md text-on-surface">First Name</label>
              <input className="w-full bg-surface-bright border border-secondary-fixed-dim/50 rounded p-3 text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none" placeholder="John" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-label-md font-label-md text-on-surface">Last Name</label>
              <input className="w-full bg-surface-bright border border-secondary-fixed-dim/50 rounded p-3 text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none" placeholder="Doe" type="text" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-label-md font-label-md text-on-surface">Company / Institution</label>
              <input className="w-full bg-surface-bright border border-secondary-fixed-dim/50 rounded p-3 text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none" placeholder="Enterprise Name" type="text" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-label-md font-label-md text-on-surface">Email Address</label>
              <input className="w-full bg-surface-bright border border-secondary-fixed-dim/50 rounded p-3 text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none" placeholder="john@example.com" type="email" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-label-md font-label-md text-on-surface">Inquiry Details</label>
              <textarea className="w-full bg-surface-bright border border-secondary-fixed-dim/50 rounded p-3 text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none" placeholder="How can we assist your organization?" rows="4"></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button className="w-full bg-primary text-on-primary py-4 rounded text-label-md font-label-md shadow-[0_2px_4px_rgba(45,52,54,0.12)] hover:bg-primary-container hover:text-on-primary-container transition-colors" type="button">Submit Inquiry</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default About;
