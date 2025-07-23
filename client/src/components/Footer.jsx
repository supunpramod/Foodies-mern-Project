import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#f9f8f3] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">About Us</h4>
            <p className="text-gray-500">
              Heaven fruitful doesn't over for these theheaven fruitful doe over days
              appear creeping seasons sad behold beari ath of it fly signs bearing
              be one blessed after.
            </p>
          </div>

          {/* Important Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">Important Link</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition">WHMCS-bridge</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">Search Domain</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">Shopping Cart</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">Our Shop</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">Contact us</h4>
            <div className="space-y-3 text-gray-500">
              <p>
                <span className="font-medium text-black">Address:</span> Hath of it fly signs bear be one blessed after
              </p>
              <p>
                <span className="font-medium text-black">Phone:</span> +2 36 265 (8060)
              </p>
              <p>
                <span className="font-medium text-black">Email:</span> info@colorlib.com
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">Newsletter</h4>
            <p className="text-gray-500">
              Heaven fruitful doesn't over lesser in days. Appear creeping seas
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <i className="ti-heart text-orange-500" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                Colorlib
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ti-dribbble"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;