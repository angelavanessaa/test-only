import React from 'react';
import './build/css/variables.css'; // Import the CSS variables
import './DemoComponent.css'; // We'll create this file for component-specific styles

const DemoComponent = () => {
  return (
    <div className="demo-container">
      <h1 className="demo-heading">Style Dictionary Demo</h1>
      
      <section className="color-section">
        <h2>Text Colors</h2>
        <p className="text-black">This text uses --colors-black</p>
        <p className="text-gray-900">This text uses --colors-gray-900</p>
        <p className="text-gray-700">This text uses --colors-gray-700</p>
        <p className="text-gray-500">This text uses --colors-gray-500</p>
        <p className="text-red-600">This text uses --colors-red-600</p>
      </section>

      <section className="background-section">
        <h2>Background Colors</h2>
        <div className="bg-gray-100">
          <p>This background uses --colors-gray-100</p>
        </div>
        <div className="bg-gray-200">
          <p>This background uses --colors-gray-200</p>
        </div>
        <div className="bg-red-100">
          <p>This background uses --colors-red-100</p>
        </div>
      </section>

      <section className="border-section">
        <h2>Border Radius</h2>
        <div className="border-sm">Border Radius SM</div>
        <div className="border-lg">Border Radius LG</div>
        <div className="border-xl">Border Radius XL</div>
      </section>
    </div>
  );
};

export default DemoComponent;
