import React from 'react'
import { cardsData } from '../../constant/data'
import CreateCard from './CreatedCard'
import WorkSlide from './WorkSlide'



const HeroCard = () => {
  return (
    <div>
        <>

            <div className="marquee-row w-full mx-auto max-w-9xl overflow-hidden relative mt-20 items-center justify-center">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r bg-[#0C0414] to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 items-center justify-center mx-auto">
                    {[...cardsData, ...cardsData].map((work, index) => (
                        <WorkSlide key={index} work={work} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l bg-[#0C0414] to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-9xl overflow-hidden relative items-center justify-center">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r bg-[#0C0414] to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((work, index) => (
                        <WorkSlide key={index} work={work} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l bg-[#0C0414] to-transparent"></div>
            </div>
        </>
    </div>
  )
}

export default HeroCard