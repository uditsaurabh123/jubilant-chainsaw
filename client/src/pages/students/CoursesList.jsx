import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/students/CourseCard'

const CoursesList = () => {
  const params = useParams()
  const {
    value: { allCourses, currency },
  } = useContext(AppContext)
  console.log('from Course section components...', allCourses)

  return (
    <div>
      <h1 className="underline font-sans font-thin text-xl text-purple-400">
        Courses Lists
      </h1>
      <h3>{params && params.input}</h3>
      <div className="md:grid md:grid-cols-3">
        {allCourses &&
          allCourses.map((course, index) => {
            return (
              <CourseCard key={index} course={course} currency={currency} />
            )
          })}
      </div>
    </div>
  )
}
export default CoursesList
