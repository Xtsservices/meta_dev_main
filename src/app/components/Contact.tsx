"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 py-2"> {/* Changed from py-4 to py-2 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: "#5de0e6" }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">info@metadev.in</p>
              <p className="text-sm text-gray-600">+91 9559559143</p>
              <p className="text-sm text-gray-600">metadev.in</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              For inquiries or questions, feel free to message here.
            </p>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm"
                  onFocus={(e) =>
                    (e.target.style.boxShadow = "0 0 0 2px #5de0e6")
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm"
                  onFocus={(e) =>
                    (e.target.style.boxShadow = "0 0 0 2px #5de0e6")
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
              </div>

              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm resize-none"
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 0 2px #5de0e6")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              ></textarea>

              <button
                onClick={handleSubmit}
                className="px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-colors duration-200 text-sm"
                style={{ backgroundColor: "#5de0e6" }}
              >
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;