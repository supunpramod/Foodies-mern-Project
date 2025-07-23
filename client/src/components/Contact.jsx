import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        // You could set some state here to show an error message to the user
      };
      document.head.appendChild(script);

      window.initMap = initMap;
    };

    const initMap = () => {
      try {
        const mapOptions = {
          center: { lat: -31.197, lng: 150.744 },
          zoom: 9,
          styles: [
            {
              featureType: "all",
              stylers: [
                { saturation: -90 },
                { lightness: 50 }
              ]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#ccdee9' }]
            }
          ],
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false
        };
        
        new window.google.maps.Map(document.getElementById('map'), mapOptions);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    loadGoogleMaps();

    return () => {
      // Clean up
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await axios.post('http://localhost:3000/api/contacts', formData);

    if (response.status === 201) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  } catch (error) {
    console.error('Submission error:', error.response?.data || error.message);
    // You can show a user-friendly error message here too
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      {/* Breadcrumb Section */}
      <section 
        className="bg-cover bg-center py-20 relative" 
        style={{ backgroundImage: "url('img/breadcrumb_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f9f8f3]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Map Section */}
          <div className="hidden sm:block mb-12 rounded-xl overflow-hidden shadow-lg">
            <div id="map" className="h-[480px] w-full"></div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3 w-full">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                <form 
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-6">
                    <div>
                      <textarea 
                        className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="9"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <input 
                          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                          name="name" 
                          id="name" 
                          type="text" 
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <input 
                          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                          name="email" 
                          id="email" 
                          type="email" 
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <input 
                        className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                        name="subject" 
                        id="subject" 
                        type="text" 
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-orange-500 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
              
              <div className="lg:w-1/3 w-full space-y-8">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-orange-500 text-2xl mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Buttonwood, California.</h3>
                      <p className="text-gray-600">Rosemead, CA 91770</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-orange-500 text-2xl mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">00 (440) 9865 562</h3>
                      <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-orange-500 text-2xl mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">support@colorlib.com</h3>
                      <p className="text-gray-600">Send us your query anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;