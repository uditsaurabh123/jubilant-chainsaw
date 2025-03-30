import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const CallToAction = () => {
  return <div className="my-7 px-7 w-dvw text-lg font-cursive font-thin text-purple-600">{ /*learn anything anytime anywhere to be changed*/}
    <h3 className='text-black font-medium text-base text-grey-500'>"Learn Anything, Anytime, Anywhere"</h3>
    <div>
    "Learn Anything, Anytime, Anywhere" is a concept that emphasizes the freedom and accessibility of knowledge. With the internet, digital resources, and online platforms, learning is no longer confined to traditional classrooms or specific timeframes. It allows individuals to access a wide variety of subjects and skills, from anywhere in the world, at any time, empowering lifelong learning and personal growth.
    </div>
    <div className="flex flex-row justify-center align-middle text-center">
      <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-2">
        Get Started
      </button>
      <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-2">
         <div className="flex items-center justify- text-center"> Learn More <FaArrowRight/> </div>
      </button>
    </div>
    </div>
}
export default CallToAction
