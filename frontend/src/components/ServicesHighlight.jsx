import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHighlight = () => {
  const services = [
    {
      title: 'Solar Installation',
      description: 'Professional residential & commercial solar system installations with 10-year warranty',
      icon: (
        <svg className="w-12 h-12 text-[var(--primary-neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
        </svg>
      ),
      link: '/solar-installation'
    },
    {
      title: 'Solar Product Sales',
      description: 'Premium quality solar panels, inverters, batteries, and accessories',
      icon: (
        <svg className="w-12 h-12 text-[var(--primary-neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      link: '/collection'
    },
    {
      title: 'Training Programs',
      description: 'Certified solar technician training with hands-on practical sessions',
      icon: (
        <svg className="w-12 h-12 text-[var(--primary-neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
        </svg>
      ),
      link: '/training'
    },
    {
      title: 'Referral Program',
      description: 'Earn rewards for every successful referral to friends and businesses',
      icon: (
        <svg className="w-12 h-12 text-[var(--primary-neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h3l2 4m0 0l-3 4m3-4h-5m3 4l3 4m-3-4h-3m-3 0l-3 4m3-4l3-4m-3 4H8m3-4l-3-4"/>
        </svg>
      ),
      link: '/referral'
    }
  ];

  return (
    <section 
      aria-labelledby="services-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
          itemProp="name"
        >
          Our Solar Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all hover:shadow-glow group animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Service"
              role="region"
              aria-labelledby={`service-${index}-title`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 
                  id={`service-${index}-title`}
                  className="text-xl font-bold mb-4 text-[var(--text)]"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p 
                  className="mb-6 text-[var(--text-muted)]"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="px-6 py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors font-medium"
                  aria-label={`Learn more about ${service.title}`}
                  itemProp="hasOfferCatalog"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;