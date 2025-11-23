import React from 'react'

const Button = ({text, icon}) => {
  return (
    <button className='w-fit bg-orange-500 p-4 rounded-b-full flex items-center justify-between'>
      <p>{text}</p>
      <span className='bg-white text-orange-500 items-center w-24'>{icon}</span>
    </button>
  )
}

export default Button