import React from "react";
import logo from "../Image/image1.jpeg";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-green-100 bg-gradient-to-r from-[#F8F6EE] to-[#EDF7ED] shadow-md backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-green-700 shadow-sm">
              <img
                src={logo}
                alt="Prakriti Logo"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-wider text-green-900 transition duration-300 hover:text-green-700 sm:text-4xl">
              Prakriti
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex md:gap-6 lg:gap-10 xl:gap-12">
            {/* About */}
            <a
              href="#about"
              className="group relative whitespace-nowrap text-sm font-medium tracking-wide text-gray-700 transition-all duration-300 hover:text-green-700 md:text-base lg:text-lg"
            >
              About
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Doctors */}
            <a
              href="#home"
              className="group relative whitespace-nowrap text-sm font-medium tracking-wide text-gray-700 transition-all duration-300 hover:text-green-700 md:text-base lg:text-lg"
            >
              Doctors
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Treatments Dropdown */}
            <div className="relative group">
              {/* Menu Button */}
              <button className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-green-700 md:text-base lg:text-lg">
                Treatments
                <span className="text-sm transition-transform duration-300 group-hover:rotate-180">
                  ▾
                </span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown */}
              <div
                className="
        invisible absolute top-full z-50 mt-3
        w-64
        rounded-xl
        border border-green-100
        bg-[#F8F6EE]
        p-2
        opacity-0
        shadow-lg
        transition-all duration-300
        group-hover:visible
        group-hover:opacity-100
      "
              >
                {/* Skin Care */}
                <div className="rounded-lg p-2 hover:bg-green-50">
                  <a
                    href="#skin-care"
                    className="block px-2 py-2 font-semibold text-green-900"
                  >
                    Skin Care
                  </a>

                  <div className="ml-3 border-l border-green-200 pl-3">
                    <a
                      href="#keloid"
                      className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-green-100 hover:text-green-700"
                    >
                      Keloid
                    </a>

                    <a
                      href="#acne"
                      className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-green-100 hover:text-green-700"
                    >
                      Acne
                    </a>

                    <a
                      href="#pigmentation"
                      className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-green-100 hover:text-green-700"
                    >
                      Pigmentation
                    </a>
                  </div>
                </div>

                {/* Other Treatments */}
                <a
                  href="#joint-pain"
                  className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  Joint & Pain Care
                </a>

                <a
                  href="#liver-digestive"
                  className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  Liver & Digestive Care
                </a>

                <a
                  href="#hair-scalp"
                  className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  Hair & Scalp Care
                </a>

                <a
                  href="#eye-care"
                  className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  Eye Care
                </a>
              </div>
            </div>

            {/* Contact */}
            <a
              href="#contact"
              className="group relative whitespace-nowrap text-sm font-medium tracking-wide text-gray-700 transition-all duration-300 hover:text-green-700 md:text-base lg:text-lg"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-3xl text-green-800 transition-all duration-300 hover:bg-green-100 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-green-100 bg-[#F8F6EE] px-5 py-4">
            <div className="flex flex-col gap-2">
              {["Home", "About", "Treatments", "Doctors", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-green-100 hover:pl-6 hover:text-green-700"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
