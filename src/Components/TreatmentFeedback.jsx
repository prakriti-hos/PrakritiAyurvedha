import React from "react";
import image1 from "../Image/KeloidImage/image1.PNG";
import image2 from "../Image/KeloidImage/keloid after.PNG";
import image3 from "../Image/KeloidImage/keliod product.PNG";
import image4 from "../Image/KeloidImage/acne1.PNG";
import image5 from "../Image/KeloidImage/acne2.PNG";
import image6 from "../Image/KeloidImage/pegi.PNG";
import image8 from "../Image/KeloidImage/hair1.PNG";
import image7 from "../Image/KeloidImage/hair2.PNG";
import image9 from "../Image/KeloidImage/hair_oil.PNG";

export default function TreatmentFeedback() {
  return (
    <>
      <section
        id="skin-care"
        className="bg-[#F8F6EE] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* ================= SECTION HEADER ================= */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Treatments
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-green-900 sm:text-4xl lg:text-5xl">
              Skin Care
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Personalized Ayurvedic care for a range of skin and
              appearance-related concerns, based on individual assessment.
            </p>
          </div>

          {/* ================= SKIN TREATMENT CARDS ================= */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* ================================================= */}
            {/* KELOID */}
            {/* ================================================= */}
            <div className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Card Header */}
              <div className="border-b border-green-100 bg-green-50 px-6 py-5">
                <h3 className="text-2xl font-bold text-green-900">
                  Keloid Care
                </h3>

                <p className="mt-1 text-sm font-medium text-green-700">
                  Skin & Scar Care
                </p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3 p-5">
                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                    Before
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image1}
                      alt="Keloid before treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-green-700">
                    After
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image2}
                      alt="Keloid after treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Medicine */}
              <div className="px-5">
                <p className="mb-2 text-sm font-bold text-green-800">
                  Ayurvedic Medicine
                </p>

                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[#F4F8F1]">
                  <img
                    src={image3}
                    alt="Ayurvedic medicine for keloid care"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-sm leading-6 text-gray-600">
                  Personalized Ayurvedic care for keloids and scar-related skin
                  concerns based on individual assessment.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* ACNE */}
            {/* ================================================= */}
            <div className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Card Header */}
              <div className="border-b border-green-100 bg-green-50 px-6 py-5">
                <h3 className="text-2xl font-bold text-green-900">Acne Care</h3>

                <p className="mt-1 text-sm font-medium text-green-700">
                  Clear Skin Wellness
                </p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3 p-5">
                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                    Before
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image4}
                      alt="Acne before treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-green-700">
                    After
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image5}
                      alt="Acne after treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Medicine */}
              <div className="px-5">
                <p className="mb-2 text-sm font-bold text-green-800">
                  Ayurvedic Medicine
                </p>

                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[#F4F8F1]">
                  <img
                    src={image6}
                    alt="Ayurvedic medicine for acne care"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-sm leading-6 text-gray-600">
                  Holistic Ayurvedic wellness support for acne and individual
                  skin-care needs.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* HAIR GROWTH */}
            {/* ================================================= */}
            <div className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Card Header */}
              <div className="border-b border-green-100 bg-green-50 px-6 py-5">
                <h3 className="text-2xl font-bold text-green-900">
                  Hair Growth
                </h3>

                <p className="mt-1 text-sm font-medium text-green-700">
                  Natural Healthy Hair
                </p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3 p-5">
                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                    Before
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image8}
                      alt="Hair growth before treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-center text-xs font-bold uppercase tracking-wider text-green-700">
                    After
                  </p>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={image7}
                      alt="Hair growth after treatment"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Medicine */}
              <div className="px-5">
                <p className="mb-2 text-sm font-bold text-green-800">
                  Ayurvedic Medicine
                </p>

                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[#F4F8F1]">
                  <img
                    src={image9}
                    alt="Ayurvedic medicine for hair growth"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-sm leading-6 text-gray-600">
                  Personalized wellness care for hair growth and other hair and
                  scalp concerns.
                </p>
              </div>
            </div>
          </div>

          {/* ================= DISCLAIMER ================= */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-xs italic leading-5 text-gray-500 sm:text-sm">
              *Before-and-after images represent individual cases. Results may
              vary depending on individual condition and treatment.
            </p>
          </div>

          {/* ================= MORE RESULTS ================= */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.instagram.com/prakritihomeowellness?stkn=aGdhcHk0YnpodW15"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-700 px-7 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
            >
              More Results
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
