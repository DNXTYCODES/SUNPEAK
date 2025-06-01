import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [assets.solarteam, assets.solar7, assets.solar5, assets.solar8];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide}
            alt="Solar installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-dark)] via-[var(--secondary-dark)/70] to-transparent" />
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
      <BackgroundSlideshow />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-[var(--primary-neon)]">Solar Energy Solutions</span><br/>
              <span className="text-[var(--text)]">For A Brighter Nigeria</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl">
              Professional Installation | Premium Products | Certified Training | Sustainable Future
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/solarcalculator"
                className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg hover:shadow-[0_0_30px_-5px_var(--primary-neon)] transition-all duration-300 font-bold text-lg"
              >
                Get Free Quote
              </Link>
              <Link
                to="/collection"
                className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-all duration-300 font-bold text-lg"
              >
                View Products
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
              {[
                { value: '10MW+', label: 'Installed' },
                { value: '24/7', label: 'Support' },
                { value: '5Y', label: 'Warranty' },
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[var(--primary-neon)]">{stat.value}</div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl aspect-square bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-xl p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-[var(--primary-neon)]/10 rounded-full animate-pulse" />
              </div>
              <img 
                src={assets.solar6} 
                alt="Solar panel" 
                className="relative z-10 w-full h-full object-contain animate-float" 
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-[var(--primary-neon)] mb-4">
              Professional Training
            </h3>
            <p className="text-[var(--text-muted)] mb-6">
              Become a certified solar technician through our hands-on training programs
            </p>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
            >
              View Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-[var(--primary-neon)] mb-4">
              Referral Benefits
            </h3>
            <p className="text-[var(--text-muted)] mb-6">
              Earn rewards for every successful referral. Join our partner program today
            </p>
            {/* <Link
              // to="/referral"
              to="#referral"
              className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
              > */}
              <a href="#referral" 
                className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
              >

              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              </a>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Brand Partnerships */}
      <div className="mt-24 border-t border-[var(--border)] pt-12">
        <div className="flex flex-wrap justify-center gap-8 opacity-90 hover:opacity-100 transition-opacity">
          {[assets.brand1, assets.brand2, assets.brand3, assets.brand4].map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt="Solar partner brand" 
              className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;