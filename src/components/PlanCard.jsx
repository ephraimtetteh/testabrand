import React from 'react'
import { assets } from '../assets/assets';
import Button from './Button';
import { plans } from '../../constant/data';

const PlanCard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div
        className=" relative flex flex-col flex-1 py-15 px-12 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${assets.footerbg})` }}
      >
        <div className="pb-4">
          <h1 className="text-6xl text-white">
            Flexible Plans <br />{" "}
            <span className=" "> For every business </span>
          </h1>
          <p className="py-4">
            From basic asset production and motion graphics to video ads and
            brand strategy, a Superside subscription lets you choose how you
            want to use your budget every month based on your business needs.
          </p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 mx-12">
          <Button text={"Book a Demo"} className={"w-full"} />
        </div>
      </div>

      <div className="flex flex-col flex-1 py-15 px-12 rounded-xl bg-green-200/50">
        <div className='pb-4'>
          <h1 className="text-6xl text-black">
            Included in all Plans
          </h1>
        </div>
          {
            plans.map((plan, index) => (
              <div key={index} className='border-b border-gray-400 py-4 text-gray-600'>
                <p>{plan}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default PlanCard