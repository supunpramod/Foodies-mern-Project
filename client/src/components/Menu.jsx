import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Special');

  const menuItems = {
    Special: [
      { id: 1, name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_1.png' },
      { id: 2, name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_2.png' },
      { id: 3, name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_3.png' },
      { id: 4, name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_4.png' },
      { id: 5, name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_5.png' },
      { id: 6, name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_6.png' }
    ],
    Breakfast: [
      { id: 4, name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_4.png' },
      { id: 5, name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_5.png' },
      { id: 6, name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_6.png' },
      { id: 1, name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_1.png' },
      { id: 2, name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_2.png' },
      { id: 3, name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: '$40.00', image: 'img/food_menu/single_food_3.png' }
    ],
    // Add other menu categories similarly
  };

  return (
    <div className="font-sans">
      {/* Breadcrumb Section */}
      <section 
        className="bg-cover bg-center py-20 relative" 
        style={{ backgroundImage: "url('img/breadcrumb_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f9f8f3]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black">Food Menu</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between mb-12">
            <div className="lg:w-5/12 mb-8 lg:mb-0">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Popular Menu</p>
                <h2 className="text-4xl font-bold">Delicious Food Menu</h2>
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="flex flex-wrap border-b border-gray-300">
                {['Special', 'Breakfast', 'Launch', 'Dinner', 'Sneaks'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 font-medium flex items-center gap-2 ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab} <img src="img/icon/play.svg" alt="play" className="h-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeTab]?.slice(0, Math.ceil(menuItems[activeTab].length / 2)).map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <h5 className="text-orange-500 font-bold mt-1">{item.price}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {menuItems[activeTab]?.slice(Math.ceil(menuItems[activeTab].length / 2)).map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <h5 className="text-orange-500 font-bold mt-1">{item.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="intro_video_bg bg-cover bg-center py-32" style={{ backgroundImage: "url('img/intro_video_bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Expect The Best</h2>
            <div className="flex justify-center">
              <a 
                href="https://www.youtube.com/watch?v=pBFQdxA-apI" 
                className="bg-white text-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-orange-500 hover:text-white transition"
              >
                ▶
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;