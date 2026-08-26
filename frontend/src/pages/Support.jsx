import React from 'react';

const Support = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-surface-container-highest">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7djSDa3mgPfi9_9l9pVbYbOjI867z80KQ5AKUia5l5BqSWTTEGhS2h4Fn6rtcUCDPhIJ2tViuYezJsj4ppxGXbDXVnrQQmsV_nQ3Y18HV-8-5j1ISRnEqLSctE3Y4UDGj46CxTNqRvJy6Pm-oXuBbvzPTmO7hdUeXoxYFVyIW59Lod3GeHaFpB1nhrWfS65_tbRx1SDQguz5LRJdTKuDTE5lFTZZdRbFAZUA6xI43Z0A6fTqww_bV')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-success-eco/10 px-3 py-1 rounded-full mb-6 border border-success-eco/20">
              <span className="material-symbols-outlined text-success-eco text-sm">eco</span>
              <span className="font-label-sm text-label-sm text-success-eco uppercase tracking-wider">Enterprise Solutions</span>
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6">Partner with Fuego Uganda Limited</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Custom energy solutions designed for maximum efficiency in schools, hospitals, and industrial enterprises across East Africa.
            </p>
            <button className="inline-flex bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-4 rounded hover:bg-primary transition-all duration-200 items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5" onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})}>
              Start a Project
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-section-gap w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 border border-outline/30 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(25,28,29,0.12)] shadow-[0_8px_30px_rgba(25,28,29,0.08)] transition-shadow duration-300" id="contact-form">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container opacity-50"></div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Bulk Inquiry Form</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Please provide your project details below. Our enterprise team will respond within 24 hours.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface block" htmlFor="name">Full Name</label>
                  <input className="w-full bg-surface border border-outline rounded p-3 font-body-md text-body-md text-on-surface transition-all duration-200 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10" id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface block" htmlFor="company">Company / Institution</label>
                  <input className="w-full bg-surface border border-outline rounded p-3 font-body-md text-body-md text-on-surface transition-all duration-200 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10" id="company" placeholder="Acme Corp" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface block" htmlFor="email">Work Email</label>
                  <input className="w-full bg-surface border border-outline rounded p-3 font-body-md text-body-md text-on-surface transition-all duration-200 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10" id="email" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface block" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-surface border border-outline rounded p-3 font-body-md text-body-md text-on-surface transition-all duration-200 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10" id="phone" placeholder="+256 ..." type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface block" htmlFor="requirements">Project Requirements</label>
                <textarea className="w-full bg-surface border border-outline rounded p-3 font-body-md text-body-md text-on-surface transition-all duration-200 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 resize-none" id="requirements" placeholder="Describe your energy needs, estimated capacity, and timeline..." rows="4"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 rounded text-primary-container focus:ring-primary-container border-outline bg-surface cursor-pointer" id="terms" type="checkbox" />
                <label className="font-body-md text-body-md text-on-surface-variant text-sm cursor-pointer" htmlFor="terms">I agree to the processing of my data for communication regarding this inquiry, as per the <a className="text-secondary hover:underline" href="#">Privacy Policy</a>.</label>
              </div>
              <button className="w-full md:w-auto bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-4 rounded hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5" type="submit">
                Send Inquiry
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>

          {/* Right Column: Branch Info & Trust */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kira HQ Card */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline/50 hover:border-secondary-container/50 transition-colors shadow-sm group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-outline shrink-0 group-hover:bg-secondary/5 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-2xl">location_city</span>
                </div>
                <div className="w-full">
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface mb-1">Kira Headquarters</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">Kira Road, Mamerito Road, Kira, Uganda</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="font-body-md text-sm">Mon-Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-medium">
                      <span className="material-symbols-outlined text-sm">call</span>
                      <a className="font-body-md text-sm hover:underline" href="tel:+256707635706">0707635706</a>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-medium">
                      <span className="material-symbols-outlined text-sm">mail</span>
                      <a className="font-body-md text-sm hover:underline" href="mailto:Fuegouganda@gmail.com">Fuegouganda@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-success-eco font-medium">
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <a className="font-body-md text-sm hover:underline" href="https://wa.me/2567888376721" target="_blank" rel="noreferrer">WhatsApp: 07888376721</a>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface font-medium">
                      <span className="material-symbols-outlined text-sm">share</span>
                      <a className="font-body-md text-sm hover:underline" href="https://www.tiktok.com/@fuegouganda0707635706" target="_blank" rel="noreferrer">TikTok: @fuegouganda0707635706</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators Bento Box */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline/30 mt-8">
              <h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-4 tracking-wider">Why Partner With Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success-eco/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-success-eco text-sm">verified_user</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-medium">Enterprise Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-sm">build</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-medium">Professional Installation Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">support_agent</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-medium">24/7 Technical Assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section-gap w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="rounded-2xl overflow-hidden border border-outline/30 shadow-[0_8px_30px_rgba(25,28,29,0.08)] bg-surface-container-lowest">
          <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-outline/30 bg-gradient-to-r from-surface-container to-surface-container-lowest">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Find us</p>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Kira Road / Mamerito Road</h3>
            </div>
            <a
              href="https://maps.google.com/?q=Mamerito+Road,+Kira,+Uganda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-sm font-semibold text-on-primary-container hover:bg-primary transition-colors shadow-sm"
            >
              Open in Maps
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
          <div className="h-[420px] w-full bg-surface-container-highest">
            <iframe
              title="Fuego Uganda Mamerito Road map"
              src="https://www.google.com/maps?q=Mamerito%20Road%2C%20Kira%2C%20Uganda&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.9) contrast(1.08)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
