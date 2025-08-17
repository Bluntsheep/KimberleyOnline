"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const textStyle =
    "hover:text-[#08CB00] font-medium transition-colors duration-500 ease-in-out cursor-pointer";

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/pricing" },
    { name: "FAQ", link: "/faq" },
    { name: "Terms", link: "/termsandconditions" },
    { name: "Contact", link: "/contactus" },
    { name: "Login", link: "/login" },
  ];

  const handleSelectTab = (index) => {
    setSelectedTab(menuItems[index].name);
    setIsMenuOpen(false); // Close mobile menu when item is selected
    router.push(menuItems[index].link); // Navigate to the selected page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-slate-300 z-50">
      {/* Main navbar container */}
      <div className="flex items-center justify-between py-4 px-4 md:px-[10%]">
        {/* Logo */}
        <div>
          <p className=" text-slate-500 text-lg md:text-xl font-semibold">
            Kimberley Online
          </p>
        </div>

        {/* Desktop menu - hidden on mobile */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <p
              key={item.name}
              className={`${textStyle} ${
                selectedTab === item.name
                  ? "text-[#08CB00] underline underline-offset-8 decoration-slate-500"
                  : ""
              }`}
              onClick={() => handleSelectTab(index)}>
              {item.name}
            </p>
          ))}
        </div>

        {/* Mobile hamburger menu button - visible only on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown - visible only when menu is open */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}>
        <div className="py-4 px-4 space-y-4">
          {menuItems.map((item, index) => (
            <p
              key={item.name}
              className={`${textStyle} block py-2 px-2 rounded-md hover:bg-slate-800 ${
                selectedTab === item.name ? "text-[#08CB00]" : ""
              }`}
              onClick={() => handleSelectTab(index)}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay - closes menu when clicked */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
