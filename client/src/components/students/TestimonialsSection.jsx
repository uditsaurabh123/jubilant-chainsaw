import React from 'react'
import TestimonialCard from './TestimonialCard'
import { dummyTestimonial } from "../../assets/assets"
const TestimonialsSection = () => {
  return (<div className="my-7 px-7 w-dvw text-lg font-cursive font-thin text-purple-600">
    <h3 className='text-black font-medium text-base text-grey-500'>Testimonial Section</h3>
    <div className="rounded-xl">Hear from our learners how our platform has made difference in so many lives and how our platform has made difference in our lives.</div>
    <div className='grid grid-cols-3'>
      {dummyTestimonial.map((testimonial,key) => <TestimonialCard key={key} testimonial={testimonial} />)}
    </div>
    </div>)
}
export default TestimonialsSection
