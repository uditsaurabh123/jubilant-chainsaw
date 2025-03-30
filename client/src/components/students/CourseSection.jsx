import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {
  const {
    value: { allCourses },
  } = useContext(AppContext)

  return (
    <>
      <h2>Learn from the best</h2>
    <div className="text-lg font-cursive font-thin text-purple-600">
      <section>
        {' '}
        Discover the top rated course from various categories.From coding and
        design to wellness and business, our courses are crafted to discover
        results.
      </section>
      <div className="flex">
        {allCourses &&
          allCourses.slice(0, 3).map((course, index) => {
            return <CourseCard key={index} course={course} />
          })}
      </div>
      <Link
        to="/students/courses-List"
        onClick={() => {
          scrollTo(0, 0)
        }}
        className="mt-2 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 p-2 text-black"
      >
        Show all the courses
      </Link>
    </div>
    </>
  )
}
export default CourseSection
