import React from 'react'
import Searchbar from './Searchbar'

const Hero = () => {
  return (
    <div>
      <div className="mt-5 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 p-10">
        <section className="text-3xl font-bold">
          "Empowering Learning,{'  '}
          <span className="text-purple-500">Transforming Futures.</span>"
        </section>
        <section className="text-sm">
          {' '}
          We believe that with the right tools, learning has the power to shape
          a brighter tomorrow.
        </section>
        <section className="m-5 p-5">
          <Searchbar />
        </section>
      </div>
    </div>
  )
}

export default Hero
