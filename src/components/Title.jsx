import React from 'react'

const Title = ({title, className, text}) => {
  return (
    <div className={`${className} flex flex-col mt-20`}>
      <p className={`${className} text-gray-600  lg:text-xl text-center items-center justify-center uppercase font-normal text-[10px]`}>
        {text}
      </p>
      <h1
        className={` ${className} lg:text-7xl md:text-4xl sm:text-2xl text-gray-800  text-center items-center justify-center break-all w-[60%] mx-auto py-2`}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title 