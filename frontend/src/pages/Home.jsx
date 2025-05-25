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

const Home = () => {
  return (
    <div className=' bg-gray-50 text-black'>

      <HeroSection />
      {/* <ServicesHighlight /> */}
      <LatestCollection/>
      <BestSeller/>
      <SolarPackages />
      {/* <DeliveryPickup/> */}
      <Chatbot/>
      <SolarCalculator />
      <Testimonials/>
      <ReferralTeaser />
      <TrainingPreview />
      <OurTeam /> 
      <HomeFAQ />
      <USPsection />

      {/* <FeaturedSection /> */}
      {/* <OurPolicy/> */}
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home
