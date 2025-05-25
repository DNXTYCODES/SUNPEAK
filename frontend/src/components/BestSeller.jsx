import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

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
          {bestSeller.map((item, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;





















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => item.bestseller);
//     setBestSeller(bestProduct.slice(0, 5));
//   }, [products]);

//   return (
//     <div className="my-10 ">
//       <div className="text-center text-3xl py-8">
//         <Title text1={"BEST"} text2={"SELLERS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-500">
//           {/* Explore our most sought-after timepieces, loved by watch enthusiasts worldwide. These best sellers combine enduring style, unmatched quality, and precision engineering, making them the perfect choice for those who appreciate the art of horology. */}
//           Discover our best-selling gaming laptops, featuring Gamer's Choice.
//         </p>
//         <p className="hidden">Top Gaming PC Laptops | Gamer’s Choice Maximum Requirements | Minimum Requirements </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {bestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
