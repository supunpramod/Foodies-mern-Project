import React, { useState } from "react";
import axios from "axios";

const Booktable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: "1",
    phone: "",
    date: "",
    time: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Optional: simple field check
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      setMessage("❌ Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/booktable", formData);
      setMessage("✅ Reservation successful!");
      setFormData({
        name: "",
        email: "",
        persons: "1",
        phone: "",
        date: "",
        time: "",
        note: "",
      });
    } catch (err) {
      console.error("Reservation error:", err);
      setMessage("❌ Failed to send reservation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="w-full lg:w-5/12">
            <div className="space-y-2">
              <p className="text-lg text-orange-500">Reservation</p>
              <h2 className="text-4xl font-bold">Book A Table</h2>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Name *"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Email address *"
                />
                <select
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="1">Persons *</option>
                  <option value="1">Number of guests 1</option>
                  <option value="2">Number of guests 2</option>
                  <option value="3">Number of guests 3</option>
                  <option value="4">Number of guests 4</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Phone number *"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Time *</option>
                  <option value="8-10am">8 AM TO 10AM</option>
                  <option value="10-12pm">10 AM TO 12PM</option>
                  <option value="12-2pm">12PM TO 2PM</option>
                  <option value="2-4pm">2PM TO 4PM</option>
                  <option value="4-6pm">4PM TO 6PM</option>
                  <option value="6-8pm">6PM TO 8PM</option>
                  <option value="4-10pm">4PM TO 10PM</option>
                  <option value="10-12pm">10PM TO 12PM</option>
                </select>
              </div>

              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Your Note *"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium"
              >
                {loading ? "Booking..." : "Book A Table"}
              </button>

              {message && <p className="mt-4 text-sm">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booktable;
