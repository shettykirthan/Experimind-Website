import React from "react";

const ProductCard = ({ title, imageSrc, className = "" }) => (
  <div
    className={`w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 lg:p-6 flex flex-col hover:-translate-y-1 ${className}`}
  >
    <div className="aspect-[5/3] w-full mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100">
      <img
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        src={imageSrc}
        alt={title}
        loading="lazy"
      />
    </div>
    <h3 className="text-indigo-900 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-sans text-center mb-3 sm:mb-4 lg:mb-6 flex-grow flex items-center justify-center leading-tight">
      {title}
    </h3>
    <button className="w-full px-4 py-2.5 sm:px-6 sm:py-3 lg:py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg text-white text-sm sm:text-base lg:text-lg font-medium font-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:shadow-md">
      See More
    </button>
  </div>
);

const ProductsSection = () => {
  const products = [
    { title: "Shiksha 2.0", imageSrc: "https://placehold.co/340x203" },
    { title: "PSL", imageSrc: "https://placehold.co/339x203" },
    { title: "Prastuti", imageSrc: "https://placehold.co/339x203" },
    { title: "Geomagic", imageSrc: "https://placehold.co/339x203" },
    { title: "Anubhav", imageSrc: "https://placehold.co/339x203" },
  ];

  return (
    <div className="bg-[#2e31923b] flex items-center">
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="text-indigo-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans leading-tight">
              Our Products
            </h2>
            <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-items-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                imageSrc={product.imageSrc}
                className="w-full max-w-xs sm:max-w-sm"
              />
            ))}
          </div>

          {/* Optional: Show more button for large collections */}
          {products.length > 8 && (
            <div className="text-center mt-8 sm:mt-12 lg:mt-16">
              <button className="px-8 py-3 bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;