import React from 'react'
import Button from './Button'
import { assets } from '../assets/assets'

const CTA = ({text, title, desc}) => {
  return (
    <div
      className=" bg-[url('./src/assets/Sheenah 2.png')] bg-cover bg-center rounded-xl mx-15 flex flex-col flex-1 relative mt-30 mb-5 backdrop-blur-4xl"
      style={{ backgroundImage: `url(${assets.footerbg})` }}
    >
      <div className="text-black/90 p-10">
        <p className="py-3 px-5 uppercase text-[18px]">{text}</p>
        <h2 className="px-5 py-2 lg:text-6xl md:text-3xl sm:text-xl text-white/90">{title}</h2>
        <p className="break-all px-5 pb-4 w-[70%]">{desc}</p>
        <Button text="Book a demon" className="bg-green-800 text-black" />
      </div>
    </div>
  );
}

export default CTA