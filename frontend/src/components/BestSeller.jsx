import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [products]);

  // Solar loading animation component with text
  const SolarLoader = () => (
    <div className="flex flex-col justify-center items-center py-16 col-span-full">
      <div className="relative w-20 h-20 mb-4">
        {/* Sun core */}
        <div className="absolute inset-0 rounded-full bg-[var(--primary-neon)] animate-pulse"></div>
        
        {/* Sun rays */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-8 bg-[var(--primary-neon)] rounded-full"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-30px)`,
              transformOrigin: '0 0',
              opacity: 0.7,
              animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>
      <p className="text-[var(--text-muted)] text-center">
        Loading best sellers...<br/>Please wait
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-[var(--bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-optimized heading structure */}
        <header className="text-center mb-12">
          <div className="inline-block relative pb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)]">
              <span className="text-[var(--primary-neon)]">Top</span> Solar Solutions in Nigeria
            </h2>
            <div className="absolute bottom-0 left-1/2 w-32 h-1 bg-[var(--primary-neon)] transform -translate-x-1/2 opacity-50 rounded-full" />
          </div>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto">
            Discover our most reliable solar products trusted by Nigerian homes and businesses. 
            Featuring top-rated solar panels, inverters, and complete solar kits with 5-year warranties.
          </p>
          {/* Hidden SEO content */}
          <div className="sr-only" aria-hidden="true">
            <p>Best Solar Products Nigeria | Premium Solar Energy Solutions | Lagos Solar Equipment</p>
            <p>Solar Panel Requirements | Inverter Specifications | Battery Capacity Nigeria</p>
          </div>
        </header>

        {/* Product grid with semantic markup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
             itemScope itemType="https://schema.org/ItemList">
          {isLoading ? (
            <SolarLoader />
          ) : bestSeller.length > 0 ? (
            bestSeller.map((item, index) => (
              <article key={index} itemScope itemType="https://schema.org/Product"
                       className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  itemProp="itemListElement"
                />
                {/* Structured data for search engines */}
                <meta itemProp="position" content={index + 1} />
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="NGN" />
                  <meta itemProp="price" content={item.price} />
                  <link itemProp="availability" href="https://schema.org/InStock" />
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-[var(--text-muted)]">
              No best selling products available at this time
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
