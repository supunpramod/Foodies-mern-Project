import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
              <h2 className="text-4xl font-bold text-black">About Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about_bg py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-5/12 lg:ml-8 mb-10 lg:mb-0 order-2 lg:order-1">
              <div className="about_img">
                <img src="img/about.png" alt="About our restaurant" className="w-full rounded-lg shadow-lg" />
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
            {/* Carousel would be implemented here - using a simple version for demo */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-lg shadow-md">
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

      {/* Chefs Section */}
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
            {/* Chef 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="p-4">
                <img src="img/team/chefs_1.png" alt="Adam Billiard" className="w-full rounded-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Adam Billiard</h3>
                <p className="text-gray-600 mb-4">Chef Master</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Chef 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="p-4">
                <img src="img/team/chefs_2.png" alt="Fred Macyard" className="w-full rounded-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Fred Macyard</h3>
                <p className="text-gray-600 mb-4">Chef Master</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Chef 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="p-4">
                <img src="img/team/chefs_3.png" alt="Justin Stuard" className="w-full rounded-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Justin Stuard</h3>
                <p className="text-gray-600 mb-4">Chef Master</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;