import React from 'react'
import Title from './Title'
import CTA from './CTA'
import FQA from './FQA'
import TrustedBy from './TrustedBy'
import Testimonial from './TestimonialCard'
import OurDifferences from './OurDifferences'
import Hero from './Hero'
import Heros from './Heros'
import FeaturedCard from './FeaturedCard'
import OurWork from './OurWork'

const Index = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <FeaturedCard />
      <div className="flex flex-col pt-30 px-3 md:px-6 lg:px-12 xl:px-12">
        <TrustedBy />
        <OurWork />
        <CTA
          text={"AI design services"}
          title={"Save up to 70% on production costs"}
          desc={
            "Customers like them, them, spend less than half of what they normally would on simnilar projects Customers like them, them, spend less than half of what they normally would on simnilar projects"
          }
        />
        <FQA />
        <Testimonial />
      </div>
    </div>
  );
}

export default Index