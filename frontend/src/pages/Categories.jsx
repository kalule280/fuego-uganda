import React, { useState } from 'react';
import solarAidedImage from '../images/solar aided.jpg';
import ekyotoImage from '../images/ekyoto efficiency.jpeg';
import doubleStoveImage from '../images/double stove (2).jpg';
import doubleGrillImage from '../images/double grill.jpg';
import commercialDoubleGrillImage from '../images/commercial double grill jpg.jpg';
import miniStoveImage from '../images/ministove.jpg';
import mediumStoveImage from '../images/midium stove.jpg';
// Additional product images from images/images subfolder
import charcoalImage from '../images/images/charcoal.jpg';
import charcoal3Image from '../images/images/charcoal3.jpg';
import ekyoto2Image from '../images/images/ekyoto2.jpg';
import ekyoto3Image from '../images/images/ekyoto3.jpg';
import firewoodImage from '../images/images/firewood.jpg';
import firewood2Image from '../images/images/firewood2.jpg';
import solarAided2Image from '../images/images/solar aided2.jpg';
import solarAided3Image from '../images/images/solar aided3.jpg';
import solarAided4Image from '../images/images/solar aided4.jpg';
import moreFuegoImage from '../images/images/more of Fuego.jpg';
import weSellLightsImage from '../images/images/we sell lights.jpg';
import weInstallLightsImage from '../images/images/we install lights.jpg';

// Product data array — all products in one place for easy filtering
const allProducts = [
  // Solar Aided Stoves
  { id: 1, name: "Solar Aided Stove", category: "Solar aided stoves", fuelType: "Wood", price: 600000, model: "F-SOL-100", image: solarAidedImage, stock: "In Stock" },
  { id: 7, name: "Solar Aided Stove Pro", category: "Solar aided stoves", fuelType: "Wood", price: 750000, model: "F-SOL-102", image: solarAided2Image, stock: "In Stock" },
  { id: 8, name: "Solar Aided Compact", category: "Solar aided stoves", fuelType: "Wood", price: 450000, model: "F-SOL-103", image: solarAided3Image, stock: "In Stock" },
  { id: 9, name: "Solar Aided Premium", category: "Solar aided stoves", fuelType: "Wood", price: 850000, model: "F-SOL-104", image: solarAided4Image, stock: "In Stock" },

  // Ekyoto (Charcoal) Stoves
  { id: 2, name: "Ekyoto Efficiency", category: "Ekyoto (Charcoal)", fuelType: "Charcoal", price: 10000000, model: "F-EKY-200", image: ekyotoImage, stock: "In Stock" },
  { id: 10, name: "Ekyoto Standard", category: "Ekyoto (Charcoal)", fuelType: "Charcoal", price: 8000000, model: "F-EKY-201", image: ekyoto2Image, stock: "In Stock" },
  { id: 11, name: "Ekyoto Compact", category: "Ekyoto (Charcoal)", fuelType: "Charcoal", price: 6000000, model: "F-EKY-202", image: ekyoto3Image, stock: "Low Stock" },

  // Firewood Stoves
  { id: 12, name: "Firewood Stove", category: "Firewood stoves", fuelType: "Wood", price: 400000, model: "F-FRW-300", image: firewoodImage, stock: "In Stock" },
  { id: 13, name: "Firewood Stove Pro", category: "Firewood stoves", fuelType: "Wood", price: 550000, model: "F-FRW-301", image: firewood2Image, stock: "In Stock" },

  // Charcoal Stoves
  { id: 14, name: "Charcoal Stove", category: "Charcoal stoves", fuelType: "Charcoal", price: 300000, model: "F-CHR-400", image: charcoalImage, stock: "In Stock" },
  { id: 15, name: "Charcoal Stove Lite", category: "Charcoal stoves", fuelType: "Charcoal", price: 180000, model: "F-CHR-401", image: charcoal3Image, stock: "In Stock" },

  // Double Stoves
  { id: 3, name: "Double Stove", category: "Double stoves", fuelType: "Wood", price: 250000, model: "F-DBL-500", image: doubleStoveImage, stock: "Low Stock" },

  // Mini Stoves
  { id: 6, name: "Mini Stove", category: "Mini stoves", fuelType: "Briquettes", price: 60000, model: "F-MIN-050", image: miniStoveImage, stock: "In Stock" },
  { id: 16, name: "Medium Stove", category: "Mini stoves", fuelType: "Briquettes", price: 120000, model: "F-MED-051", image: mediumStoveImage, stock: "In Stock" },

  // Grills
  { id: 4, name: "Double Grill", category: "Grills", fuelType: "Charcoal", price: 350000, model: "F-GRL-600", image: doubleGrillImage, stock: "In Stock" },
  { id: 5, name: "Commercial Double Grill", category: "Grills", fuelType: "Charcoal", price: 600000, model: "F-COM-601", image: commercialDoubleGrillImage, stock: "In Stock" },

  // Solar Lighting
  { id: 17, name: "Solar Lights (Sales)", category: "Solar lighting", fuelType: "Solar", price: 150000, model: "F-LGT-700", image: weSellLightsImage, stock: "In Stock" },
  { id: 18, name: "Solar Light Installation", category: "Solar lighting", fuelType: "Solar", price: 250000, model: "F-LGT-701", image: weInstallLightsImage, stock: "In Stock" },

  // More from Fuego
  { id: 19, name: "Fuego Multi-Purpose Stove", category: "Charcoal stoves", fuelType: "Charcoal", price: 500000, model: "F-MPS-800", image: moreFuegoImage, stock: "In Stock" },
];

const categoryList = ["Solar aided stoves", "Ekyoto (Charcoal)", "Firewood stoves", "Charcoal stoves", "Mini stoves", "Double stoves", "Grills", "Solar lighting"];
const fuelTypeList = ["Wood", "Charcoal", "Briquettes", "Solar"];

const Categories = () => {
  // Pre-select these categories by default so their products show first
  const [selectedCategories, setSelectedCategories] = useState([
    "Solar aided stoves", 
    "Ekyoto (Charcoal)", 
    "Firewood stoves", 
    "Double stoves"
  ]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  // Toggle a value in/out of an array
  const toggleFilter = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  // Filter logic:
  // If categories are selected, show only those. If none are selected, show none (or could show all).
  let filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesFuel = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(product.fuelType);
    return matchesCategory && matchesFuel;
  });

  // Apply sorting
  if (sortBy === 'name-az') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-za') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Sidebar Filter */}
        <aside className="md:col-span-3 space-y-8">
          <div>
            <h3 className="text-headline-md font-headline-md mb-4 text-on-background">Categories</h3>
            <ul className="space-y-2">
              {categoryList.map(cat => (
                <li key={cat}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      className="text-primary focus:ring-primary rounded border-secondary/20"
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                    />
                    <span className="text-body-md font-body-md">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md mb-4 text-on-background">Fuel Type</h3>
            <ul className="space-y-2">
              {fuelTypeList.map(fuel => (
                <li key={fuel}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      className="text-primary focus:ring-primary rounded border-secondary/20"
                      type="checkbox"
                      checked={selectedFuelTypes.includes(fuel)}
                      onChange={() => toggleFilter(fuel, selectedFuelTypes, setSelectedFuelTypes)}
                    />
                    <span className="text-body-md font-body-md">{fuel}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

        </aside>

        {/* Product Grid */}
        <section className="md:col-span-9">
          <div className="flex justify-between items-center mb-8 border-b border-surface-container-high pb-4">
            <h1 className="text-display-lg font-display-lg text-on-background">
              Industrial Stoves
              <span className="text-secondary text-body-md font-body-md ml-3">({filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''})</span>
            </h1>
            <div className="flex items-center gap-4 text-body-md font-body-md">
              <span className="text-secondary">Sort by:</span>
              <select
                className="border border-secondary/20 rounded bg-surface focus:border-secondary focus:ring-0 text-on-surface p-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Best Sellers</option>
                <option value="new">New Arrivals</option>
                <option value="name-az">Name: A to Z</option>
                <option value="name-za">Name: Z to A</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>search_off</span>
              <p className="text-headline-md font-headline-md text-secondary mt-4">No products match your filters</p>
              <p className="text-body-md font-body-md text-secondary mt-2">Try adjusting your category, fuel type, or price range.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-surface-container-lowest border border-surface-container-high rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(45,52,54,0.08)] hover:shadow-[0_8px_32px_rgba(45,52,54,0.12)] transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-surface-container relative">
                    <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                    <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-label-md font-label-md ${product.stock === 'Low Stock' ? 'bg-error text-on-error' : 'bg-tertiary text-on-tertiary'}`}>
                      {product.stock}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-label-md font-label-md text-white bg-primary/80 px-2.5 py-0.5 rounded-full mb-2">{product.category}</span>
                    <h3 className="text-headline-md font-headline-md text-on-background">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
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
