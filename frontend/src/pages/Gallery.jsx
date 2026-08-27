import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

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

const galleries = {
  solar: [solar1, solar2, solar3, solar4, hybrid1, hybrid2, hybrid3, hybrid4, installed1, installed2],
  lights: [light1, light2, installed3],
  stoves: [stove1, stove2, stove3]
};

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category') || 'solar';
  const images = galleries[category] || galleries.solar;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <main className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {category.replace('-', ' ')} Gallery
            </h1>
            <p className="text-gray-600 mt-2">
              Explore our professional installations and product lineup.
            </p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-2 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 w-fit"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Go Back
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((imgSrc, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border border-gray-100">
              <img 
                src={imgSrc} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
};

export default Gallery;
