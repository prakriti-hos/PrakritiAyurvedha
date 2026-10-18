import React from "react";
import product1 from "../Image/ProductImage/product1.jpeg";
import product2 from "../Image/ProductImage/product2.jpeg";
import product3 from "../Image/ProductImage/product3.jpeg";
import product4 from "../Image/ProductImage/product4.jpeg";
// import product3 from "../assets/product3.jpg";
// import product4 from "../assets/product4.jpg";
// import product5 from "../assets/product5.jpg";
// import product6 from "../assets/product6.jpg";
// import product7 from "../assets/product7.jpg";
// import product8 from "../assets/product8.jpg";
// import product9 from "../assets/product9.jpg";
// import product10 from "../assets/product10.jpg";
// import product11 from "../assets/product11.jpg";
// import product12 from "../assets/product12.jpg";
// import product13 from "../assets/product13.jpg";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "Multi Vitamin",
      category: "Herbal Care",
      description:
        "A balanced blend of essential vitamins and minerals designed to support daily nutritional needs, energy, immunity, and overall wellness.",
      image: product1,
    },
    {
      id: 2,
      name: "Lipoma",
      category: "Herbal Care",
      description:
        "Personalized Ayurvedic care focused on supporting overall wellness and managing lipoma-related concerns through an individual assessment and traditional Ayurvedic approach.",
      image: product2,
    },
    {
      id: 3,
      name: "Psoriasis",
      category: "Skin Care",
      description:
        "Personalized Ayurvedic care for psoriasis-related skin concerns, based on individual assessment and a holistic approach to skin wellness.",
      image: product3,
    },
    {
      id: 4,
      name: "F-Care",
      category: "Skin Care",
      description:
        "A specially formulated Ayurvedic wellness product designed to support overall health and well-being across multiple health concerns, based on individual needs and Ayurvedic assessment.",
      image: product4,
    },
  ];
  return (
    <>
      <section
        id="products"
        className="bg-[#F8F6EE] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Products
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-green-900 sm:text-4xl lg:text-5xl">
              Ayurvedic Products
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Explore our range of Ayurvedic products prepared with traditional
              knowledge and carefully selected herbal ingredients.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="h-64 overflow-hidden bg-[#F4F8F1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-green-900">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>
                  {/* View Details Button */}
                </div>
              </div>
            ))}
          </div>

          {/* Instagram More Results Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.instagram.com/"
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
