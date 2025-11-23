import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import WorkComponent from './WorkComponent'
import ServiceComponent from './ServiceComponent'
import Testimonial from './Testimonial'
import Clients from './Clients'
import CTA from './CTA'

const Index = () => {
  return (
    <div className=''>
        <Hero />
        <AboutComponent />
        <WorkComponent />
        <ServiceComponent />
        <Testimonial />
        <Clients />
        <CTA />
    </div>
  )
}

export default Index