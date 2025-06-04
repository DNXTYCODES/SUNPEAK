import React from 'react';
import { FaWhatsapp, FaBatteryFull, FaTachometerAlt, FaRegStar, FaSolarPanel, FaMoneyBillWave, FaPhoneAlt } from 'react-icons/fa';

const SolarPackagesPage = () => {
  const packages = [
    {
      name: 'Basic Home',
      price: 650000,
      capacity: '2.5kVA',
      features: [
        '3x 400W Solar Panels',
        '2.4kWh Lithium Battery',
        '2.5kVA Inverter',
        'Basic Installation',
        '1-Year Warranty'
      ],
      bestFor: 'Small apartments/1-2 rooms'
    },
    {
      name: 'Family Starter',
      price: 1200000,
      capacity: '4kVA',
      features: [
        '6x 400W Solar Panels',
        '4.8kWh Lithium Battery',
        '4kVA Hybrid Inverter',
        'Standard Installation',
        '2-Year Warranty',
        'Basic Monitoring'
      ],
      bestFor: '3-4 bedroom homes',
      popular: true
    },
    {
      name: 'Premium Home',
      price: 2500000,
      capacity: '8kVA',
      features: [
        '12x 400W Solar Panels',
        '9.6kWh Lithium Battery',
        '8kVA Hybrid Inverter',
        'Professional Installation',
        '5-Year Warranty',
        'Smart Monitoring',
        'Surge Protection'
      ],
      bestFor: 'Large homes/offices'
    },
    {
      name: 'Commercial Lite',
      price: 4500000,
      capacity: '15kVA',
      features: [
        '24x 400W Solar Panels',
        '20kWh Lithium Battery',
        '15kVA 3-Phase Inverter',
        'Commercial Installation',
        '5-Year Warranty',
        'Advanced Monitoring',
        'Diesel Generator Integration'
      ],
      bestFor: 'Small businesses'
    },
    {
      name: 'Enterprise Solution',
      price: 9800000,
      capacity: '25kVA',
      features: [
        '40x 400W Solar Panels',
        '40kWh Lithium Battery',
        '25kVA 3-Phase Inverter',
        'Industrial Installation',
        '10-Year Warranty',
        'Energy Management System',
        'Priority Support'
      ],
      bestFor: 'Factories/large facilities'
    }
  ];

  return (
    <section className="min-h-screen bg-[var(--bg)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] flex items-center justify-center gap-3">
            <FaSolarPanel className="text-[var(--primary-neon)]" />
            Solar Package Solutions
          </h1>
          <p className="text-xl text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
            Complete solar systems for every need - from small homes to large enterprises
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors ${pkg.popular ? 'ring-2 ring-[var(--primary-neon)]' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-[var(--bg)] px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center gap-1">
                  <FaRegStar /> Popular Choice
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text)]">{pkg.name}</h3>
                <p className="text-[var(--text-muted)] mt-1">{pkg.bestFor}</p>
              </div>

              <div className="text-[var(--primary-neon)] text-4xl font-bold mb-6">
                ₦{pkg.price.toLocaleString()}
              </div>

              <div className="flex items-center gap-2 text-[var(--text-muted)] mb-6">
                <FaBatteryFull />
                <span>{pkg.capacity} System Capacity</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/2348134553751"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-bold hover:shadow-glow"
              >
                <FaWhatsapp /> Get Package Details
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaTachometerAlt className="text-[var(--primary-neon)]" />
            Package Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[var(--border)]">
                  <th className="pb-4 text-[var(--text)]">Feature</th>
                  {packages.map((pkg, index) => (
                    <th key={index} className="pb-4 text-[var(--text)]">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Capacity', 'Battery Storage', 'Warranty', 'Monitoring', 'Support'].map((feature, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-[var(--border)]">
                    <td className="py-4 text-[var(--text-muted)]">{feature}</td>
                    {packages.map((pkg, pkgIndex) => (
                      <td key={pkgIndex} className="py-4 text-[var(--text)]">
                        {{
                          'Capacity': pkg.capacity,
                          'Battery Storage': pkg.features.find(f => f.includes('kWh'))?.match(/\d+kWh/)?.[0] || '-',
                          'Warranty': pkg.features.find(f => f.includes('Year'))?.match(/\d+-Year/)?.[0] || '-',
                          'Monitoring': pkg.features.some(f => f.includes('Monitoring')) ? '✓' : '-',
                          'Support': pkg.features.some(f => f.includes('Support')) ? '24/7' : 'Business Hours'
                        }[feature]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaMoneyBillWave className="text-[var(--primary-neon)]" />
            Package FAQs
          </h2>
          
          <div className="space-y-6">
            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                Can I customize these packages?
              </h3>
              <p className="text-[var(--text-muted)]">
                Yes! All packages can be modified to meet your specific needs. Contact us for custom solutions.
              </p>
            </div>

            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                What's included in the price?
              </h3>
              <p className="text-[var(--text-muted)]">
                Prices include equipment, installation, VAT, and basic commissioning. Excludes structural modifications.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Our engineers can design a bespoke solar system tailored to your exact energy requirements
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/2348118532900"
              className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold hover:shadow-glow flex items-center gap-2"
            >
              <FaWhatsapp /> Chat with Engineer
            </a>
            <a
              href="tel:+2348118532900"
              className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-xl font-bold hover:bg-[var(--primary-neon)/10] flex items-center gap-2"
            >
              <FaPhoneAlt /> Call +234 811 853 2900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarPackagesPage;