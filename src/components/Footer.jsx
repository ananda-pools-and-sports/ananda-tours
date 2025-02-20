import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import logo from "../utils/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  // NOTE: In a production environment, this should be handled by a secure backend service.
  // The current implementation using a mailto link is for demonstration purposes only.
  // Implement proper server-side logic to handle newsletter subscriptions securely.
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real-world application, you would typically send this data to a server
    // For demonstration purposes, we're using a mailto link
    window.location.href = `mailto:anandapoolsandsports@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to the newsletter list.`;
    setEmail("");
    // Show a success message to the user
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Ananda Sports Tours Logo"
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-400 text-sm">
              Empowering athletes through world-class sports tours and training
              experiences and get your cutsom/tailorised package now!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919131959638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <WhatsApp size={24} />
              </a>
              <a
                href="https://facebook.com/anandasportstours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/anandasportstours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/itinerary"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Itineraries
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-ananda-orange" />
                <span>+91 91319 59638</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-ananda-orange" />
                <a
                  href="mailto:info@anandasportstours.com"
                  className="hover:underline"
                >
                  info@anandasportstours.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ananda-orange" />
                <span>123 Sports Avenue, Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest tours and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-ananda-orange w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-ananda-orange text-white px-4 py-2 rounded-r-md hover:bg-ananda-orange-dark transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Other Sites & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-sm font-semibold mb-2">Other Sites:</h4>
            <div className="flex space-x-4">
              <a
                href="https://anandapoolsandsports.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ananda Pools and Sports
              </a>
              <a
                href="https://www.ddsports.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                DD Sports Academy
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ananda Sports Tours. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
