
import React from 'react';
import { FaSolarPanel, FaTools, FaLightbulb, FaHome, FaBuilding, FaClipboardCheck } from 'react-icons/fa';

const Services = () => {
  const installationProcess = [
    { step: 1, title: 'Energy Audit', desc: 'Detailed analysis of your power needs' },
    { step: 2, title: 'System Design', desc: 'Customized solar solution planning' },
    { step: 3, title: 'Approval & Permits', desc: 'Handling all regulatory requirements' },
    { step: 4, title: 'Installation', desc: 'Professional equipment setup' },
    { step: 5, title: 'Commissioning', desc: 'System testing & activation' },
    { step: 6, title: 'Support', desc: '24/7 monitoring & maintenance' }
  ];

  return (
    <section className="bg-[var(--bg)] min-h-screen" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Comprehensive Solar Solutions
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            End-to-end solar services from design to maintenance
          </p>
        </div>

        {/* Solar Installation Services */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaSolarPanel className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">Solar Installation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex items-center gap-2 mb-4">
                <FaHome className="text-[var(--primary-neon)]" />
                <h3 className="text-2xl font-bold text-[var(--text)]">Residential Systems</h3>
              </div>
              <p className="text-[var(--text-muted)] mb-6">
                Complete home solar solutions for 24/7 power supply:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['1-5kVA Systems', 'Battery Backup', 'Net Metering', 'Smart Monitoring'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-[var(--text)]">
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex items-center gap-2 mb-4">
                <FaBuilding className="text-[var(--primary-neon)]" />
                <h3 className="text-2xl font-bold text-[var(--text)]">Commercial Systems</h3>
              </div>
              <p className="text-[var(--text-muted)] mb-6">
                Industrial-scale solar solutions for businesses:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['10-500kVA Systems', 'Energy Storage', 'Load Management', 'Diesel Hybrid'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-[var(--text)]">
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaClipboardCheck className="text-[var(--primary-neon)]" />
            Our Installation Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationProcess.map((step, index) => (
              <div 
                key={index}
                className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-neon)] flex items-center justify-center text-[var(--bg)]">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)]">{step.title}</h3>
                </div>
                <p className="text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance & Repairs */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaTools className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">Maintenance & Repairs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Preventive Maintenance</h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Quarterly system health checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Panel cleaning & optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Battery performance testing
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Repair Services</h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  24/7 emergency support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Component replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Warranty claims assistance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaLightbulb className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">Custom Solar Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Specialized Systems</h3>
              <div className="grid grid-cols-2 gap-4 text-[var(--text-muted)]">
                {['Solar Water Pumping', 'Street Lighting', 'Telecom Towers', 'EV Charging', 'Agricultural', 'Marine'].map((system, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[var(--primary-neon)]">⚙️</span>
                    {system}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Tailored Features</h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Hybrid system design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Custom monitoring solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Scalable energy storage
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Ready to Go Solar?</h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Get a personalized system design and quote from our certified solar engineers
          </p>
          <button className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold hover:shadow-glow transition-all">
            Request Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;





























// import { FaGamepad, FaDragon, FaThermometerHalf, FaShieldAlt, FaTachometerAlt, FaPalette, FaTools, FaShippingFast, FaSyncAlt, FaChartLine } from 'react-icons/fa';

// const Services = () => {
//   const services = [
//     {
//       icon: <FaDragon className="w-8 h-8 text-purple-500" />,
//       title: "Performance Tuning",
//       description: "Expert overclocking and thermal optimization for peak gaming performance",
//       features: ["CPU/GPU OC", "Liquid Cooling Setup", "Stability Testing"],
//       badge: "PRO"
//     },
//     {
//       icon: <FaThermometerHalf className="w-8 h-8 text-red-500" />,
//       title: "Thermal Solutions",
//       description: "Advanced cooling systems for maximum FPS stability",
//       features: ["Custom Loop Installation", "Thermal Paste Replacement", "Undervolting"],
//       badge: "24/7"
//     },
//     {
//       icon: <FaShieldAlt className="w-8 h-8 text-blue-500" />,
//       title: "Gamer's Warranty",
//       description: "Specialized protection for gaming rigs",
//       features: ["3-Year Coverage", "RGB Component Repair", "Accidental Damage"],
//       badge: "NEW"
//     },
//     {
//       icon: <FaTachometerAlt className="w-8 h-8 text-green-500" />,
//       title: "Benchmarking",
//       description: "Pro-level performance validation",
//       features: ["3DMark Testing", "Frame Rate Analysis", "Bottleneck Detection"],
//       badge: "FREE"
//     },
//     {
//       icon: <FaPalette className="w-8 h-8 text-pink-500" />,
//       title: "RGB Customization",
//       description: "Signature lighting solutions",
//       features: ["Full System Sync", "Custom Profiles", "Ambient Integration"],
//       badge: "HOT"
//     },
//     {
//       icon: <FaTools className="w-8 h-8 text-yellow-500" />,
//       title: "Modding Services",
//       description: "Transform your battlestation",
//       features: ["Case Mods", "Custom Paint Jobs", "Cable Management"],
//       badge: "DIY"
//     },
//     {
//       icon: <FaShippingFast className="w-8 h-8 text-cyan-500" />,
//       title: "Secure Delivery",
//       description: "ESD-safe shipping for components",
//       features: ["Anti-Sag Packaging", "Real-Time GPS", "White Glove Setup"],
//       badge: "SAFE"
//     },
//     {
//       icon: <FaSyncAlt className="w-8 h-8 text-orange-500" />,
//       title: "Upgrade Program",
//       description: "Stay ahead in the specs race",
//       features: ["GPU Trade-In", "Storage Upgrades", "Memory Boost"],
//       badge: "25% OFF"
//     },
//     {
//       icon: <FaChartLine className="w-8 h-8 text-emerald-500" />,
//       title: "Esports Optimization",
//       description: "Pro tournament configurations",
//       features: ["Latency Reduction", "Network Tuning", "Peripheral Calibration"],
//       badge: "PRO"
//     }
//   ];

//   return (
//     <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent sm:text-5xl">
//             Elite Gaming Services
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
//             Premium solutions for hardcore gamers and PC enthusiasts
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-purple-500/20"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
//               <div className="flex items-start mb-4">
//                 <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-xl text-white">
//                   {service.icon}
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <div className="flex items-center gap-3">
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                       {service.title}
//                     </h3>
//                     {service.badge && (
//                       <span className="px-2 py-1 text-xs font-bold bg-purple-500 text-white rounded-full">
//                         {service.badge}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-300 mt-1">{service.description}</p>
//                 </div>
//               </div>
//               <ul className="space-y-2 mt-4">
//                 {service.features.map((feature, idx) => (
//                   <li 
//                     key={idx}
//                     className="flex items-center text-gray-600 dark:text-gray-400"
//                   >
//                     <svg 
//                       className="flex-shrink-0 w-4 h-4 text-green-500 mr-2" 
//                       fill="currentColor" 
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//                     </svg>
//                     <span className="font-medium">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">
//             Ready to Dominate Your Game?
//           </h3>
//           <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl hover:shadow-2xl font-bold flex items-center gap-2 mx-auto">
//             <FaGamepad className="w-5 h-5 animate-bounce" />
//             Optimize Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

