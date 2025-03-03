import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [classesDropdown, setClassesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "classes",
        "instructors",
        "gallery",
        "schedule",
        "testimonials",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    setClassesDropdown(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    {
      id: "classes",
      label: "plans",
    },
    { id: "instructors", label: "Instructors" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-gray-900 bg-opacity-90 py-4"
      }`}
    >
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div href="" className="flex items-center">
              <div className="flex flex-col">
                <span
                  className={`font-bold text-2xl tracking-wide ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  VISION
                </span>
                <span
                  className={`text-sm uppercase tracking-wider ${
                    scrolled ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  MARTIAL ARTS
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() =>
                    item.hasDropdown
                      ? setClassesDropdown(!classesDropdown)
                      : handleNavClick(item.id)
                  }
                  onMouseEnter={() =>
                    item.hasDropdown && setClassesDropdown(true)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setClassesDropdown(false)
                  }
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center space-x-1
                    ${
                      activeSection === item.id
                        ? scrolled
                          ? "text-gray-900 font-semibold"
                          : "text-white font-semibold"
                        : scrolled
                        ? "text-gray-700 hover:text-gray-900"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>

                {/* Dropdown for Classes */}
                {item.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg z-20 overflow-hidden
                      ${classesDropdown ? "block" : "hidden"}
                      ${scrolled ? "bg-white" : "bg-gray-900"}
                    `}
                    onMouseEnter={() => setClassesDropdown(true)}
                    onMouseLeave={() => setClassesDropdown(false)}
                  >
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.id}
                          onClick={() => handleNavClick(dropdownItem.id)}
                          className={`w-full text-left block px-4 py-2 text-sm
                            ${
                              scrolled
                                ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                            }
                          `}
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button on Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className={`
                px-6 py-2.5 rounded-md text-sm font-bold transition-colors
                ${
                  scrolled
                    ? "bg-gray-800 text-white hover:bg-gray-900"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }
              `}
            >
              Free Trial Class
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-gray-800"
              }`}
              aria-expanded="false"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-1">
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() =>
                  item.hasDropdown
                    ? setClassesDropdown(!classesDropdown)
                    : handleNavClick(item.id)
                }
                className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex justify-between items-center ${
                  activeSection === item.id
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      classesDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown for Classes */}
              {item.hasDropdown && (
                <div
                  className={`ml-4 mt-1 overflow-hidden rounded-md bg-gray-50 transition-all duration-300 ${
                    classesDropdown ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <button
                      key={dropdownItem.id}
                      onClick={() => handleNavClick(dropdownItem.id)}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {dropdownItem.label}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          <button
            onClick={() => {
              handleNavClick("contact");
              setIsOpen(false);
            }}
            className="w-full mt-3 px-4 py-3 bg-gray-800 text-white rounded-md text-base font-medium hover:bg-gray-900 transition-colors"
          >
            Free Trial Class
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
