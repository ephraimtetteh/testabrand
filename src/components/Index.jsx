import React from 'react'
import Title from './Title'
import CTA from './CTA'
import FQA from './FQA'
import TrustedBy from './TrustedBy'
import Testimonial from './TestimonialCard'
import OurDifferences from './OurDifferences'

const Index = () => {
  return (
    <div className="flex flex-col pt-30 px-3 md:px-6 lg:px-12 xl:px-12">
      {/* <Title
        text={"Trusted by 50+ of worlds top brand "}
        className={"lg:text-2xl"}
      /> */}
      <OurDifferences />
      <TrustedBy />
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
  );
}

export default Index