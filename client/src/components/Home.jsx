import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:3000/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch menu items
        const itemsRes = await axios.get(`${API_BASE_URL}/items`);
        setMenuItems(itemsRes.data);
        
        // Fetch chefs
        const chefsRes = await axios.get(`${API_BASE_URL}/chefs`);
        setChefs(chefsRes.data || []);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="font-sans text-center py-20">
        <p className="text-xl font-semibold text-orange-500">Loading delicious items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-sans text-center py-20">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Banner Section */}
      <section className="banner_part bg-cover bg-center py-32" style={{ backgroundImage: "url('img/booking_tabel_bg.png')" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="banner_text text-white">
                <div className="space-y-4">
                  <h5 className="text-xl font-medium">Expensive but the best</h5>
                  <h1 className="text-5xl font-bold leading-tight">Deliciousness jumping into the mouth</h1>
                  <p className="text-lg">
                    Together creeping heaven upon third dominion be upon won't darkness rule land
                    behold it created good saw after she'd Our set living. Signs midst dominion
                    creepeth morning
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="#" className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-orange-500 hover:text-white">
                      Reservation <img src="img/icon/left_1.svg" alt="" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="flex items-center gap-2">
                      <span><img src="img/icon/play.svg" alt="" /></span> Watch our story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Items Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-full lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Popular Dishes</p>
                <h2 className="text-4xl font-bold">Our Exclusive Items</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="single_item bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/food_item/food_item_1.png" alt="Indian Burger" className="w-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Indian Burger</h3>
                <p className="text-gray-600 mb-4">Was brean shed moveth day yielding tree yielding day were female and</p>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_2.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="single_item bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/food_item/food_item_2.png" alt="Cremy Noodles" className="w-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Cremy Noodles</h3>
                <p className="text-gray-600 mb-4">Was brean shed moveth day yielding tree yielding day were female and</p>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_2.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="single_item bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/food_item/food_item_3.png" alt="Honey Meat" className="w-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Honey Meat</h3>
                <p className="text-gray-600 mb-4">Was brean shed moveth day yielding tree yielding day were female and</p>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_2.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-1/3 lg:w-5/12 lg:offset-lg-1 order-2 sm:order-1">
              <div className="about_img">
                <img src="img/about.png" alt="About our restaurant" className="w-full" />
              </div>
            </div>
            <div className="w-full sm:w-2/3 lg:w-4/12 order-1 sm:order-2">
              <div className="space-y-4">
                <h5 className="text-lg text-orange-500">Our History</h5>
                <h2 className="text-4xl font-bold">Where The Food's As Good As The Root Beer.</h2>
                <h4 className="text-xl font-medium">Satisfying people hunger for simple pleasures</h4>
                <p className="text-gray-600">
                  May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
                  abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep
                </p>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_2.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section - Dynamically populated */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Popular Menu</p>
                <h2 className="text-4xl font-bold">Delicious Food Menu</h2>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-wrap border-b border-gray-300">
                <button className="px-4 py-2 font-medium text-orange-500 border-b-2 border-orange-500 flex items-center gap-2">
                  Special <img src="img/icon/play.svg" alt="" />
                </button>
                <button className="px-4 py-2 font-medium text-gray-600 flex items-center gap-2">
                  Breakfast <img src="img/icon/play.svg" alt="" />
                </button>
                <button className="px-4 py-2 font-medium text-gray-600 flex items-center gap-2">
                  Launch <img src="img/icon/play.svg" alt="" />
                </button>
                <button className="px-4 py-2 font-medium text-gray-600 flex items-center gap-2">
                  Dinner <img src="img/icon/play.svg" alt="" />
                </button>
                <button className="px-4 py-2 font-medium text-gray-600 flex items-center gap-2">
                  Sneaks <img src="img/icon/play.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="tab-content">
            <div className="active_tab">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Map over menuItems to display them */}
                {menuItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                    {/* Using item.picture from database */}
                    <img src={item.picture} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      {/* Using item.title from database */}
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      {/* Using item.describe from database */}
                      <p className="text-gray-600">{item.describe}</p>
                      {/* Using item.price from database */}
                      <h5 className="text-orange-500 font-bold">${item.price.toFixed(2)}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-cover bg-center" style={{ backgroundImage: "url('img/intro_video_bg.png')" }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Expect The Best</h2>
            <div className="flex justify-center">
              <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="bg-white text-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                ▶
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section - Dynamic */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-full lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Team Member</p>
                <h2 className="text-4xl font-bold">Our Experience Chefs</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div
                key={chef._id}
                className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              >
                <div className="p-4">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full rounded-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{chef.name}</h3>
                  <p className="text-gray-600 mb-4">{chef.position}</p>
                  <div className="flex justify-center gap-4">
                    {chef.social?.map((s, index) => (
                      <a
                        key={index}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-orange-500 text-xl"
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-full lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Reservation</p>
                <h2 className="text-4xl font-bold">Book A Table</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Name *" />
                  </div>
                  <div>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Email address *" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                      <option value="1" selected>Persons *</option>
                      <option value="2">Number of guests 1</option>
                      <option value="3">Number of guests 2</option>
                      <option value="4">Number of guests 3</option>
                      <option value="5">Number of guests 4</option>
                    </select>
                  </div>
                  <div>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Phone number *" />
                  </div>
                  <div>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Date *" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                      <option value="" selected>Time *</option>
                      <option value="1">8 AM TO 10AM</option>
                      <option value="1">10 AM TO 12PM</option>
                      <option value="1">12PM TO 2PM</option>
                      <option value="1">2PM TO 4PM</option>
                      <option value="1">4PM TO 6PM</option>
                      <option value="1">6PM TO 8PM</option>
                      <option value="1">4PM TO 10PM</option>
                      <option value="1">10PM TO 12PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg" rows="4" placeholder="Your Note *"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium">
                    Book A Table
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-full lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Testimonials</p>
                <h2 className="text-4xl font-bold">Customers Feedback</h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-lg">
                <div className="flex-shrink-0">
                  <img src="img/client/client_1.png" alt="Mosan Cameron" className="w-20 h-20 rounded-full" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    Also made from. Give may saying meat there from heaven it lights face had is gathered
                    god dea earth light for life may itself shall whales made they're blessed whales
                    also made from give may saying meat. There from heaven it lights face had amazing place
                  </p>
                  <h4 className="font-bold">Mosan Cameron, <span className="text-gray-600 font-normal">Executive of fedex</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-full lg:w-5/12">
              <div className="space-y-2">
                <p className="text-lg text-orange-500">Recent News</p>
                <h2 className="text-4xl font-bold">Latest From Blog</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/blog/blog_1.png" alt="Blog post" className="w-full" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <a href="#" className="text-gray-600">Apr 06, 2019</a>
                  <a href="#" className="text-gray-600"># Food News</a>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <a href="blog.html">Adama kind deep gatherin first over fter his great</a>
                </h3>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_1.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/blog/blog_2.png" alt="Blog post" className="w-full" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <a href="#" className="text-gray-600">Apr 06, 2019</a>
                  <a href="#" className="text-gray-600"># Food News</a>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <a href="blog.html">Adama kind deep gatherin first over fter his great</a>
                </h3>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_1.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img src="img/blog/blog_3.png" alt="Blog post" className="w-full" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <a href="#" className="text-gray-600">Apr 06, 2019</a>
                  <a href="#" className="text-gray-600"># Food News</a>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <a href="blog.html">Adama kind deep gatherin first over fter his great</a>
                </h3>
                <a href="#" className="text-orange-500 font-medium flex items-center gap-2">
                  Read More <img src="img/icon/left_1.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;