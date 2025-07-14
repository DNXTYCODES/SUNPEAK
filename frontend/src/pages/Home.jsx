import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import FeaturedSection from '../components/Featured'
import OurTeam from '../components/OurTeam'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import UnboxingGallery from '../components/UnboxingGallery'
import DeliveryPickup from '../components/DeliveryPickup'
import Chatbot from '../components/Chatbot'
import ServicesHighlight from '../components/ServicesHighlight'
import USPsection from '../components/USPsection'
import ReferralTeaser from '../components/ReferralTeaser'
import TrainingPreview from '../components/TrainingPreview'
import SolarCalculator from '../components/SolarCalculator'
import HomeFAQ from '../components/HomeFAQ'
import SolarPackages from '../components/SolarPackages'
import LocationMap from '../components/LocationMap'

const Home = () => {
  return (
    <main className='bg-gray-50 text-black'>
      {/* Hero Section - Should contain the main H1 heading for the page */}
      <HeroSection />

    
      {/* Testimonials Section */}
      <Testimonials/>
      
      {/* Products Section */}
      <section aria-labelledby="products-section-heading" className="py-12">
        <h2 id="products-section-heading" className="sr-only">Solar Products in Benin</h2>
        <div className="container mx-auto">
          <LatestCollection/>
          <BestSeller/>
        </div>
      </section>
      
      {/* Solar Packages */}
      <SolarPackages />
      
      {/* Solar Tools */}
      <section aria-labelledby="solar-tools-heading" className="py-12 bg-gray-100">
        <h2 id="solar-tools-heading" className="sr-only">Solar Tools and Calculators</h2>
        <div className="container mx-auto">
          <Chatbot/>
          <SolarCalculator />
        </div>
      </section>
      
      {/* Services Section */}
      <section aria-labelledby="services-section-heading" className="py-12">
        <h2 id="services-section-heading" className="sr-only">Solar Services in Benin</h2>
        <div className="container mx-auto">
          <ReferralTeaser />
          <TrainingPreview />
          <ServicesHighlight />
        </div>
      </section>
      
      {/* Company Information */}
      <section aria-labelledby="company-info-heading" className="py-12 bg-gray-100">
        <h2 id="company-info-heading" className="sr-only">About SunPeak Solar</h2>
        <div className="container mx-auto">
          <OurTeam /> 
          <HomeFAQ />
          <USPsection />
        </div>
      </section>
    </main>
  )
}

export default Home
































// import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'
// import FeaturedSection from '../components/Featured'
// import OurTeam from '../components/OurTeam'
// import HeroSection from '../components/HeroSection'
// import Testimonials from '../components/Testimonials'
// import UnboxingGallery from '../components/UnboxingGallery'
// import DeliveryPickup from '../components/DeliveryPickup'
// import Chatbot from '../components/Chatbot'
// import ServicesHighlight from '../components/ServicesHighlight'
// import USPsection from '../components/USPsection'
// import ReferralTeaser from '../components/ReferralTeaser'
// import TrainingPreview from '../components/TrainingPreview'
// import SolarCalculator from '../components/SolarCalculator'
// import HomeFAQ from '../components/HomeFAQ'
// import SolarPackages from '../components/SolarPackages'
// import LocationMap from '../components/LocationMap'

// const Home = () => {
//   return (
//     <div className=' bg-gray-50 text-black'>

//       <HeroSection />
//       {/* <ServicesHighlight /> */}
//       <LatestCollection/>
//       <BestSeller/>
//       <Testimonials/>
//       <SolarPackages />
//       {/* <DeliveryPickup/> */}
//       <Chatbot/>
//       <SolarCalculator />
//       <ReferralTeaser />
//       <TrainingPreview />
//       <OurTeam /> 
//       <HomeFAQ />
//       <USPsection />
//       {/* <LocationMap /> */}

//       {/* <FeaturedSection /> */}
//       {/* <OurPolicy/> */}
//       {/* <NewsletterBox/> */}
//     </div>
//   )
// }

// export default Home
