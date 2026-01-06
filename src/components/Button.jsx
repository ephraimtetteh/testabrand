import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div>
      <button
        className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-black text-white`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button