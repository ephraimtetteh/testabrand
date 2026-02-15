import React from 'react'
import CTA from '../components/CTA';
import FQA from '../components/FQA';
import Title from '../components/Title';
import PlanCard from '../components/PlanCard';
import Testimonial from '../components/TestimonialCard';
import TrustedBy from '../components/TrustedBy';

const Pricing = () => {
  return (
    <div className="flex flex-col pt-30 px-3 md:px-6 lg:px-12 xl:px-12 ">
      <Title
        title={"A Subscription built to fuel your growth"}
        text={"pricing model"}
        className={'pb-5'}
      />

      <PlanCard />
      <TrustedBy />

      <Testimonial />

      <CTA
        text={"AI design services"}
        title={"Save up to 70% on production costs"}
        desc={
          "Customers like them, them, spend less than half of what they normally would on simnilar projects Customers like them, them, spend less than half of what they normally would on simnilar projects"
        }
      />
      <FQA />
    </div>
  );
}

export default Pricing