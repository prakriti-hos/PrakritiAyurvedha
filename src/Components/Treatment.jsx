import React from "react";

export default function Treatment() {
  return (
    <>
      {" "}
      <section
        id="treatments"
        className="bg-[#F4F8F1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Areas of Care
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-green-900 sm:text-4xl lg:text-5xl">
              Holistic Care for
              <span className="block text-green-700">
                Mind, Body & Wellness
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Explore our personalized Ayurvedic wellness services designed to
              support your overall health through natural and holistic
              approaches.
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Skin & Scar Care */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                🌿
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Skin & Scar Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Personalized Ayurvedic care for keloids, scars and various
                skin-related concerns.
              </p>
{/* 
              <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>

            {/* Acne & Pigmentation */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                ✨
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Acne & Pigmentation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Holistic approaches for acne, pigmentation and other common
                facial skin concerns.
              </p>

              {/* <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>

            {/* Joint Pain */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                🦴
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Joint Pain Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Personalized wellness support for joint discomfort, mobility and
                musculoskeletal concerns.
              </p>

              {/* <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>

            {/* Liver & Digestive */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                🫀
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Liver & Digestive Wellness
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Supportive Ayurvedic wellness care for liver, digestive and
                metabolic health concerns.
              </p>

              {/* <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>

            {/* Hair & Scalp */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                💇
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Hair & Scalp Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Personalized care focused on common hair and scalp-related
                wellness concerns.
              </p>

              {/* <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>

            {/* Respiratory */}
            <div className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                🫁
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">
                Respiratory Wellness
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Personalized wellness support for respiratory and breathing
                related concerns.
              </p>

              {/* <button className="mt-6 font-semibold text-green-700 transition hover:text-green-900">
                Learn More →
              </button> */}
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
           
              <div className="mt-10 flex justify-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-700 px-7 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
            >
             View All Areas of Care
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
