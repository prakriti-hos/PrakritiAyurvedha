import React from "react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-[#F8F6EE] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Contact Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-900 sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
          </div>

          {/* Contact Information */}
          <div className="mt-10 w-full rounded-3xl border border-green-100 bg-white p-6 shadow-md sm:p-8 lg:p-10">
            {/* Doctor 1 */}
            <div>
              <p className="text-lg font-bold text-green-800 sm:text-xl">
                Consultant
              </p>
              <p>Shivani</p>
              <a
                href="tel:+919876543210"
                className="text-base text-gray-600 transition-colors duration-300 hover:text-green-700 sm:text-lg"
              >
                <p>Mob : 9958711202</p>
              </a>
            </div>

            {/* Doctor 2 */}
            <div className="mt-5">
              <p className="text-lg font-bold text-green-800 sm:text-xl">
                Consultant
              </p>
              <p>Ankur kumar</p>
              <a
                href="tel:+919876543210"
                className="text-base text-gray-600 transition-colors duration-300 hover:text-green-700 sm:text-lg"
              >
                <p>Mob : 92666 88941</p>
              </a>
            </div>

            {/* Address */}
            <div className="mt-7 border-t border-green-100 pt-6">
              <p className="mb-2 text-lg font-bold text-green-800">Address</p>

              <address className="not-italic text-base leading-7 text-gray-600">
                Prakriti Homeo Wellness
                <br />
                Dayanand Nagar, Master Colony
                <br />
                Budhana, Muzaffarnagar
                <br />
                Uttar Pradesh - 251309
              </address>
            </div>

            {/* Mobile Number */}
            <div className="mt-7 border-t border-green-100 pt-6">
              <p className="mb-2 text-lg font-bold text-green-800">
                Mobile Number
              </p>

              <a
                href="tel:+919876543210"
                className="text-base text-gray-600 transition-colors duration-300 hover:text-green-700 sm:text-lg"
              >
                <p className="font-bold">24*7 Support</p>
                +91 9958711202
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
