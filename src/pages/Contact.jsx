import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {

  return (
    <section>
      <div
        className={`flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen relative`}
        style={{ backgroundImage: `url(${assets.hero1})` }}
      >
        <div className="bg-black/70 absolute top-0 left-0 bottom-0 right-0 h-screen"></div>
        <div className="flex gap-12 justify-between items-center bottom-10 absolute">
          <div className="w-full">
            <h1 className="lg:text-6xl text-gray-200">
              You Have Questions, <br /> We Have Answers
            </h1>
            <p className=" text-[16px] text-xl text-white py-5 w-[50%] pb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, suscipit? Inventore ducimus hic ratione vero temporibus
              facilis praesentium quae dolores.
            </p>
            <Link
              to={"/work"}
              className="text-[16px] bg-orange-600 lg:px-10 lg:py-3 rounded w-fit px-4 py-2 cursor-pointer sm:mb-4 md:mb-4"
            >
              Explore Our Projects
            </Link>
          </div>
          <div className="flex flex-col px-24 gap-12">
            <form className="bg-white p-6 rounded-2xl text-black w-full">
              <div className="py-4">
                <h3 className="text-gray-700 text-2xl capitalize">
                  Tell us what you need
                </h3>
                <p className="text-gray-600 pb-6 text-[14px]">
                  Our team is ready to assit you with your project
                </p>
              </div>
              <div className="lg:flex gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border  text-gray-500 text-[14px] border-gray-400 rounded mb-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border  text-gray-500 text-[14px] border-gray-400 rounded mb-3 outline-none"
                />
              </div>
              <div className="lg:flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-3 border  text-gray-500 text-[14px] border-gray-400 rounded outline-none"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border  text-gray-500 text-[14px] border-gray-400 rounded outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-3 border  text-gray-500 text-[14px] border-gray-400 rounded flex flex-col w-full mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="Subject/ Type of Enquiry"
                className="p-3 border text-gray-500 text-[14px] border-gray-400 rounded flex flex-col w-full mb-3 outline-none"
              />
              <textarea
                name=""
                placeholder="message"
                className="p-3 border text-gray-500 text-[14px] border-gray-400 rounded flex flex-col w-full mb-3 outline-none"
              ></textarea>
              {/* <button
                type="submit"
                className="text-[14px] text-gray-400 border border-gray-400 hover:bg-gray-100 hover:border-none lg:px-10 lg:py-3 rounded w-full px-4 py-2 cursor-pointer sm:mb-4 md:mb-4"
              >
                Submit
              </button> */}
              <Button type={"submit"} text={"submit"} />
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-gray-100 items-center gap-24 py-20 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className=" flex justify-between gap-8 ">
          <div className="bg-black/50  p-8 text-white rounded">
            <p>
              Place Mall
              <br /> Flower Port Spintex <br /> Opposite the Over head
            </p>
          </div>

          <div className="bg-black/50 p-8 text-white rounded">
            <h3 className="text-[20px] pb-2 font-semibold">Email</h3>
            <div>
              <div>
                <IoLocationOutline className="text-orange-500 w-28" />
              </div>
              <p>info@testa.com</p>
            </div>
          </div>

          <div className="bg-black/50 p-8 text-white rounded">
            <h3 className=" text-[20px] pb-2 font-semibold ">Contact</h3>
            <div>
              <div>
                <IoLocationOutline className="text-orange-500 w-28" />
              </div>
              <p>0987654321</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact