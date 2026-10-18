import React from "react";
import image1 from "../Image/image3.jpeg";
export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className="bg-gradient-to-br from-[#F8F6EE] via-[#F4F8F1] to-[#EDF7ED]"
      >
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:gap-12 md:py-24 lg:px-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-xs font-semibold tracking-wider text-green-700 sm:text-sm">
              🌿 Trusted Ayurvedic Healthcare
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-green-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Healing Through
              <span className="block text-green-700">Nature & Ayurveda</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0">
              Experience authentic Ayurvedic treatments designed to restore
              balance, improve wellness, and nurture your mind, body, and soul
              through natural healing practices.
            </p>
            <div className="mt-10">
              {" "}
              <p className="mb-5 inline-block rounded-lg border-2 border-green-700 px-5 py-2 text-2xl font-bold text-green-900">
                {" "}
                Address{" "}
              </p>{" "}
              <address className="not-italic leading-7 text-gray-600">
                {" "}
                Prakriti homeo wellness Dayanand Nagar master colony Budhana
                Muzaffarnagar Uttar Pradesh 251309{" "}
              </address>{" "}
            </div>
            {/* Buttons */}
            <div className="mt-8 flex flex-col font-bold gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl block bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 sm:px-8 sm:py-4 sm:text-lg">
                Book Appointment
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 md:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-green-800 sm:text-3xl">
                  10+
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-800 sm:text-3xl">
                  5000+
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Happy Patients
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-800 sm:text-3xl">
                  25+
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Expert Doctors
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex w-full flex-1 justify-center md:w-1/2">
            <div className="relative w-full max-w-md text-center">
              {/* Soft Glow */}
              <div className="absolute -inset-6 rounded-full bg-green-200/40 blur-3xl"></div>

              {/* Doctor Image */}
              <div className="relative z-10 mx-auto h-[300px] w-[300px] overflow-hidden rounded-full shadow-2xl sm:h-[400px] sm:w-[400px] md:h-[430px] md:w-[430px]">
                <img
                  src={image1}
                  alt="Dr. Mukesh Bhargav"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Doctor Information */}
              <div className="relative z-10 mt-6">
                <h3 className="text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
                  Dr. Mukesh Bhargav
                </h3>

                <p className="mt-1 text-base font-semibold text-green-700 sm:text-lg">
                  Ayurvedic Physician
                </p>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                  BAMS • 32 Years of Experience in Ayurvedic Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
