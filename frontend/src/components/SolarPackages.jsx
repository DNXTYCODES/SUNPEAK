import React from 'react';
import { FaWhatsapp, FaSolarPanel, FaBatteryFull, FaTachometerAlt, FaRegStar, FaPhoneAlt } from 'react-icons/fa';

const SolarPackages = () => {
  const packages = [
    {
      name: 'Starter Home Solar Package',
      price: 850000,
      capacity: '3kVA',
      features: [
        '4x 400W Solar Panels',
        '3.5kWh Lithium Battery',
        '3kVA Inverter',
        'Basic Installation',
        '1-Year Warranty'
      ],
      popular: false,
      coverage: '2-3 bedroom home in Benin',
      energyOutput: '8-10kWh daily'
    },
    {
      name: 'Family Solar Solution',
      price: 1850000,
      capacity: '5kVA',
      features: [
        '8x 400W Solar Panels',
        '7kWh Lithium Battery',
        '5kVA Hybrid Inverter',
        'Professional Installation',
        '3-Year Warranty',
        'Smart Monitoring'
      ],
      popular: true,
      coverage: '4-5 bedroom home in Edo',
      energyOutput: '16-20kWh daily'
    },
    {
      name: 'Premium Home Solar System',
      price: 3500000,
      capacity: '10kVA',
      features: [
        '16x 400W Solar Panels',
        '14kWh Lithium Battery',
        '10kVA Hybrid Inverter',
        'Advanced Installation',
        '5-Year Warranty',
        'Smart Home Integration',
        '24/7 Support'
      ],
      popular: false,
      coverage: 'Large homes & businesses in Benin City',
      energyOutput: '32-40kWh daily'
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope 
      itemType="https://schema.org/ProductCollection"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProductCollection",
          "name": "Solar Packages in Benin",
          "description": "Complete solar power solutions for homes and businesses in Benin, Edo State",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Solar Packages",
            "itemListElement": packages.map((pkg, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "name": pkg.name,
              "description": `${pkg.capacity} solar system for ${pkg.coverage}`,
              "price": pkg.price,
              "priceCurrency": "NGN",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "url": "https://sunpeak.com.ng/solarpackages",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 6.3350,
                  "longitude": 5.6037
                },
                "geoRadius": "50000"
              }
            }))
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] flex items-center justify-center gap-3">
            <FaSolarPanel className="text-[var(--primary-neon)]" />
            Solar Packages in <span className="text-[var(--primary-neon)]">Benin</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mt-2">
            Complete solar power solutions for homes and businesses in Edo State
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors ${pkg.popular ? 'ring-2 ring-[var(--primary-neon)]' : ''}`}
              itemScope
              itemType="https://schema.org/Offer"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-[var(--bg)] px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center gap-1">
                  <FaRegStar /> Most Popular in Benin
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--text)]" itemProp="name">{pkg.name}</h3>
                <div className="text-[var(--primary-neon)] text-4xl font-bold my-4" itemProp="price">
                  ₦{(pkg.price).toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
                  <FaBatteryFull />
                  <span itemProp="description">{pkg.capacity} System for {pkg.coverage}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                    itemProp="itemOffered"
                  >
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/2348134553751"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-bold hover:shadow-glow"
                aria-label={`Get ${pkg.name} solar package in Benin`}
              >
                <FaWhatsapp /> Get This Package
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-[var(--border)] pt-12">
          <p className="text-[var(--text-muted)] mb-4">
            Prices include VAT and professional installation in Benin City. Custom solar solutions available.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+2348060771104"
              className="flex items-center gap-2 px-6 py-2 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10]"
              aria-label="Call for custom solar quote in Edo State"
            >
              <FaPhoneAlt /> Call for Custom Solar Quote
            </a>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-4">
            All packages come with free site assessment and energy audit in Benin
          </p>
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <p>Solar packages Benin | Solar system prices Edo | Solar panel installation Nigeria</p>
          <p>Best solar packages in Benin City | Affordable solar solutions Edo State | SunPeak solar offers</p>
          <p>3kVA solar system price | 5kVA solar package cost | 10kVA solar installation Benin</p>
        </div>
      </div>
    </section>
  );
};

export default SolarPackages;









































// import React from 'react';
// import { FaWhatsapp, FaSolarPanel, FaBatteryFull, FaTachometerAlt, FaRegStar, FaPhoneAlt } from 'react-icons/fa';

// const SolarPackages = () => {
//   const packages = [
//     {
//       name: 'Starter Home',
//       price: 850000,
//       capacity: '3kVA',
//       features: [
//         '4x 400W Solar Panels',
//         '3.5kWh Lithium Battery',
//         '3kVA Inverter',
//         'Basic Installation',
//         '1-Year Warranty'
//       ],
//       popular: false
//     },
//     {
//       name: 'Family Solution',
//       price: 1850000,
//       capacity: '5kVA',
//       features: [
//         '8x 400W Solar Panels',
//         '7kWh Lithium Battery',
//         '5kVA Hybrid Inverter',
//         'Professional Installation',
//         '3-Year Warranty',
//         'Smart Monitoring'
//       ],
//       popular: true
//     },
//     {
//       name: 'Premium Home',
//       price: 3500000,
//       capacity: '10kVA',
//       features: [
//         '16x 400W Solar Panels',
//         '14kWh Lithium Battery',
//         '10kVA Hybrid Inverter',
//         'Advanced Installation',
//         '5-Year Warranty',
//         'Smart Home Integration',
//         '24/7 Support'
//       ],
//       popular: false
//     }
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 animate-fadeIn">
//           <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] flex items-center justify-center gap-3">
//             <FaSolarPanel className="text-[var(--primary-neon)]" />
//             Solar Package Solutions
//           </h2>
//           <p className="text-xl text-[var(--text-muted)] mt-2">
//             Pre-configured systems for different energy needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {packages.map((pkg, index) => (
//             <div 
//               key={index}
//               className={`relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors ${pkg.popular ? 'ring-2 ring-[var(--primary-neon)]' : ''}`}
//             >
//               {pkg.popular && (
//                 <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-[var(--bg)] px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center gap-1">
//                   <FaRegStar /> Most Popular
//                 </div>
//               )}
              
//               <div className="text-center mb-6">
//                 <h3 className="text-2xl font-bold text-[var(--text)]">{pkg.name}</h3>
//                 <div className="text-[var(--primary-neon)] text-4xl font-bold my-4">
//                   ₦{(pkg.price).toLocaleString()}
//                 </div>
//                 <div className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
//                   <FaBatteryFull />
//                   <span>{pkg.capacity} System</span>
//                 </div>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {pkg.features.map((feature, idx) => (
//                   <li 
//                     key={idx}
//                     className="flex items-center gap-2 text-[var(--text-muted)]"
//                   >
//                     <span className="text-[var(--primary-neon)]">✓</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href="https://wa.me/2348134553751"
//                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-bold hover:shadow-glow"
//               >
//                 <FaWhatsapp /> Get This Package
//               </a>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center border-t border-[var(--border)] pt-12">
//           <p className="text-[var(--text-muted)] mb-4">
//             Prices include VAT and basic installation. Custom solutions available.
//           </p>
//           <div className="flex justify-center gap-4">
//             <a
//               href="tel:+2348060771104"
//               className="flex items-center gap-2 px-6 py-2 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10]"
//             >
//               <FaPhoneAlt /> Call for Custom Quote
//             </a>
//           </div>
//           <p className="text-sm text-[var(--text-muted)] mt-4">
//             All packages come with free site assessment and energy audit
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolarPackages;