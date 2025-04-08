import React from 'react'

function TextInput({ children }) {
  return (
    <div className='flex my-3 md:w-md bg-white-100 justify-stretch items-center border border-purple-200 p-4 cursor-pointer shadow-custom-light shadow-3d rounded
    transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out'>{children}</div>

  )
}

export default TextInput