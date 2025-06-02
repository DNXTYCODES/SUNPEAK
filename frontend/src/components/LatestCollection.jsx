import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [products]);

  // Solar loading animation component
  const SolarLoader = () => (
    <div className="flex justify-center items-center py-16">
      <div className="relative w-20 h-20">
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
    </div>
  );

  return (
    <section className="py-16 bg-[var(--bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Structured data header */}
        <header className="text-center mb-12" itemScope itemType="https://schema.org/ItemList">
          <div className="inline-block relative pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)]" itemProp="name">
              <span className="text-[var(--primary-neon)]">Latest</span> Solar Products
            </h1>
            <div className="absolute bottom-0 left-1/2 w-32 h-1 bg-[var(--primary-neon)] transform -translate-x-1/2 opacity-50 rounded-full" />
          </div>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto" itemProp="description">
            Explore our newest solar technologies optimized for Nigerian homes and businesses
          </p>
          {/* Hidden SEO content */}
          <div className="sr-only" aria-hidden="true">
            <p>New Solar Products Nigeria | Latest Solar Panels Lagos | Solar Energy Innovations</p>
            <p>2024 Solar Technology | Nigerian Solar Market | Renewable Energy Updates</p>
          </div>
        </header>

        {/* Loading state */}
        {isLoading ? (
          <SolarLoader />
        ) : (
          /* Product grid with schema markup */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              itemScope itemType="https://schema.org/ItemList">
            {latestProducts.map((item, index) => (
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
        )}
      </div>
    </section>
  );
};

export default LatestCollection;





























// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10 ">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"NEW"} text2={"ARRIVALS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
//           Discover the latest gadgets and tech innovations from top brands like Alienware, 
//           MSI, Dell, HP, ASUS ROG, Acer, and more.
//         </p>
//       </div>

//       {/* Rendering Products - No changes made here */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;













// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-white">
//           {/* Discover our newest arrivals, where luxury meets precision. Our latest collection features exclusive timepieces that embody the perfect blend of craftsmanship. */}
//           Discover the latest luxury watch collections from Rolex, Patek
//           Philippe, Audemars Piguet, Omega, and more. Featuring cutting-edge
//           craftsmanship, exclusive designs, and timeless elegance, these new
//           arrivals redefine sophistication.{" "}
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;
