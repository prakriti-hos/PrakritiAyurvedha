import React from "react";
import image4 from "../Image/image4.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-[#F8F6EE] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* ================= LEFT - IMAGE ================= */}
          <div className="w-full md:w-[48%]">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Decorative Glow */}
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-green-200/50 blur-3xl"></div>

              {/* Image Frame */}
              <div className="relative z-10 overflow-hidden rounded-[40px] shadow-xl">
                <img
                  src={image4}
                  alt="Ayurvedic Treatment at Prakriti"
                  className="block h-auto w-full"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-3 z-20 rounded-2xl bg-green-800 px-5 py-4 text-center shadow-xl sm:-right-5 sm:px-7 sm:py-5">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  32+
                </h3>

                <p className="text-xs font-medium text-green-100 sm:text-sm">
                  Years of Ayurveda
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT - CONTENT ================= */}
          <div className="w-full md:w-[52%]">
            {/* Small Heading */}
            <span className="text-sm ms-1.5 font-bold uppercase tracking-[0.2em] text-green-700">
              About Prakriti
            </span>

            {/* Main Heading */}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-green-900 sm:text-4xl lg:text-5xl">
              Ancient Wisdom,
              <span className="block text-green-700">Natural Healing</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              At Prakriti, we believe in healing the body by restoring its
              natural balance. Our approach combines traditional Ayurvedic
              wisdom with personalized care to support long-term health and
              wellness.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Our experienced Ayurvedic practitioners provide natural, holistic
              treatments designed to care for your mind, body, and overall
              well-being.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>
                <span className="font-medium text-gray-700">
                  Personalized Care
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>
                <span className="font-medium text-gray-700">
                  Natural Treatments
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>
                <span className="font-medium text-gray-700">
                  Experienced Doctors
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>
                <span className="font-medium text-gray-700">
                  Holistic Wellness
                </span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 rounded-xl bg-green-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
