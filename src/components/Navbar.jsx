import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../utils/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTours = (event) => {
    event.preventDefault();
    const section = document.getElementById("tours-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["About Us", "Tours", "Customize", "Gallery", "Contact Us"];

  const NavItem = ({ label, mobile }) => {
    const baseClasses = `relative rounded-md font-medium transition-all duration-300 ease-in-out overflow-hidden group ${
      isScrolled ? "text-ananda-orange" : "text-white"
    }`;
    const mobileClasses = "block px-3 py-2 text-base w-full text-left";
    const desktopClasses = "inline-flex items-center px-3 py-2 text-sm";

    let href =
      label === "Contact Us"
        ? "/contact"
        : label === "Tours"
        ? "/tours"
        : label === "Customize"
        ? "/customize"
        : label === "About Us"
        ? "/about-us"
        : label === "Gallery"
        ? "/gallery"
        : `/#${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <Link
        to={href}
        className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        onClick={
          label === "Tours"
            ? handleScrollToTours
            : () => mobile && setIsMenuOpen(false)
        }
      >
        <span
          className={`relative z-10 transition-colors duration-300 ${
            isScrolled
              ? "group-hover:text-white"
              : "group-hover:text-ananda-orange"
          }`}
        >
          {label}
        </span>
        <span
          className={`absolute inset-0 ${
            isScrolled ? "bg-ananda-orange" : "bg-white"
          } transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}
        ></span>
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className={isScrolled ? "text-ananda-orange" : "text-white"}
            >
              <img
                src={logo}
                alt="Ananda Sports Tours"
                className="h-12 w-auto sm:h-14 md:h-16 lg:h-18"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavItem key={item} label={item} />
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`${
                isScrolled ? "text-ananda-orange" : "text-white"
              } hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? "bg-white" : "bg-ananda-orange"
          }`}
        >
          {navItems.map((item) => (
            <NavItem key={item} label={item} mobile />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
