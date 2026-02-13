import React from 'react'

const Title = ({title, className, text}) => {
  return (
    <div className="flex flex-col pt-40 pb-20">
      <h1
        className={` ${className} text-2xl text-gray-800  text-center items-center justify-center  z-10`}
      >
        {title}
      </h1>
      <p className=" text-black/80 lg:text-xl text-sm text-center items-center justify-center z-10">
        {text}
      </p>
    </div>
  );
}

export default Title