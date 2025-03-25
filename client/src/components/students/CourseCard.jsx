import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

const CourseCard = ({ course, currency }) => {
  const [rating, setRating] = useState(0)
  const show_rating = import.meta.env.VITE_STAR_RATING

  return (
      <div className="my-4 mx-1 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100   bg-opacity-50 p-3 text-black rounded-lg">
        <Link to={`/students/course/${course._id}`}>
          <img src={course.courseThumbnail}/>
          <h3 className="text-xl underline">{course.courseTitle}</h3>
        </Link>
        <div>
          <div>{course.educator.name}</div>
          <div>{course.courseRatings.rating}</div>
          <div>
            <div>
              {course.courseContent.map((courseContent, index) => {
                return (
                  <div key={index}>
                    Chapter {index + 1}: {courseContent.chapterTitle}
                  </div>
                )
              })}
            </div>
            <p>22</p>

            <StarRatings
              rating={rating}
              starRatedColor="Puprle"
              changeRating={(newRating) => {
                setRating(newRating)
              }}
              numberOfStars={Number(show_rating)}
              name="rating"
              starDimension="15px"
              starEmptyColor="rgb(189, 181, 213)"
            />
          </div>
          <div className="text-base font-semibold text-grey-800">
            Price:{' '}
            {(
              course.coursePrice -
              course.discount * (course.coursePrice / 100)
            ).toFixed(2)}{' '}
            {currency}
          </div>
        </div>

      </div>

  )
}
export default CourseCard
