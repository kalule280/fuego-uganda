import React from 'react';
import solarAidedImage from '../images/solar aided.jpg';
import ekyotoImage from '../images/ekyoto efficiency.jpeg';
import doubleStoveImage from '../images/double stove (2).jpg';
import doubleGrillImage from '../images/double grill.jpg';
import commercialDoubleGrillImage from '../images/commercial double grill jpg.jpg';
import miniStoveImage from '../images/ministove.jpg';

const Categories = () => {
  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Sidebar Filter */}
        <aside className="md:col-span-3 space-y-8">
          <div>
            <h3 className="text-headline-md font-headline-md mb-4 text-on-background">Categories</h3>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Solar aided stoves</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Ekyoto (Charcoal)</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Firewood stoves</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Charcoal stoves</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Mini stoves</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Double stoves</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Grills</span>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md mb-4 text-on-background">Fuel Type</h3>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Wood</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Charcoal</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary rounded border-secondary/20" type="checkbox" />
                  <span className="text-body-md font-body-md">Briquettes</span>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md mb-4 text-on-background">Price Range</h3>
            <input className="w-full accent-primary" max="1000" min="0" type="range" />
            <div className="flex justify-between text-body-md font-body-md text-secondary mt-2">
              <span>UGX 0</span>
              <span>UGX 5,000,000+</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-9">
          <div className="flex justify-between items-center mb-8 border-b border-surface-container-high pb-4">
            <h1 className="text-display-lg font-display-lg text-on-background">Industrial Stoves</h1>
            <div className="flex items-center gap-4 text-body-md font-body-md">
              <span className="text-secondary">Sort by:</span>
              <select className="border border-secondary/20 rounded bg-surface focus:border-secondary focus:ring-0 text-on-surface p-2">
                <option>Best Sellers</option>
                <option>New Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Product Card 1: Solar Aided Stove */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Solar Aided Stove" className="w-full h-full object-cover" src={solarAidedImage} />
                <span className="absolute top-2 right-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md">In Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-SOL-100</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Solar Aided Stove</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 600,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
            
            {/* Product Card 2: Ekyoto Efficiency */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Ekyoto Efficiency" className="w-full h-full object-cover" src={ekyotoImage} />
                <span className="absolute top-2 right-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md">In Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-EKY-200</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Ekyoto Efficiency</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 3,500,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
            
            {/* Product Card 3: Double Stove */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Double Stove" className="w-full h-full object-cover" src={doubleStoveImage} />
                <span className="absolute top-2 right-2 bg-error text-on-error px-3 py-1 rounded-full text-label-md font-label-md">Low Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-DBL-300</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Double Stove</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 250,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
            
            {/* Product Card 4: Double Grill */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Double Grill" className="w-full h-full object-cover" src={doubleGrillImage} />
                <span className="absolute top-2 right-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md">In Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-GRL-400</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Double Grill</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 350,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
            
            {/* Product Card 5: Commercial Double Grill */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Commercial Double Grill" className="w-full h-full object-cover" src={commercialDoubleGrillImage} />
                <span className="absolute top-2 right-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md">In Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-COM-500</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Commercial Double Grill</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 600,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
            
            {/* Product Card 6: Mini Stove */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] bg-surface-container relative">
                <img alt="Mini Stove" className="w-full h-full object-cover" src={miniStoveImage} />
                <span className="absolute top-2 right-2 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md">In Stock</span>
              </div>
              <div className="p-4">
                <p className="text-secondary text-label-md font-label-md mb-1">Model: F-MIN-050</p>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">Mini Stove</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-headline-md font-headline-md text-primary">UGX 60,000</span>
                  <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">shopping_cart</span></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick Inquiry FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary text-on-primary p-4 rounded-full shadow-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2 group">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-label-md font-label-md pl-0 group-hover:pl-2">Bulk Inquiry</span>
        </button>
      </div>
    </>
  );
};

export default Categories;
