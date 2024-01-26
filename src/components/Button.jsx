import React from 'react'

const Button = ({content,type="button",icon=null}) => {
  return (
    <button
      type={type}
      className="bg-[#6674cc] dark:bg-[#29347a] text-white sm:text-lg text-base z-20 py-2 px-3 border border-[#6674cc] dark:border-[#29347a]
    rounded-lg tracking-wider hover:text-black relative transition-all duration-300 before:contents-[''] 
    before:absolute before:top-0 before:bottom-0 before:right-full before:rounded-lg before:left-0 before:bg-white before:hover:right-0 before:transition-all before:duration-500 before:-z-10
    flex items-center justify-center gap-x-2
    hover:scale-95"
    >
      {content}
      <span className='text-xl'>{icon}</span>
    </button>
  );
}

export default Button