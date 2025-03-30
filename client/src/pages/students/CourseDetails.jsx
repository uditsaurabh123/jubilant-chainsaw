import React,{useState,useEffect} from 'react'
import {Link, Outlet, useParams,useLocation } from "react-router-dom"
import { dummyCourses } from '../../assets/assets'
import DOMPurify from 'dompurify';
import Navbar from '../../components/students/Navbar';

const CourseDetails = () => {
  const {id} = useParams()
  const [course, setCourse] = useState({});
  const location = useLocation()
  const state = location.state
  console.log("this is state *** --->",state)
  useEffect(() => {
    const course = dummyCourses.find(course=>course._id===id)
    if (course){
    setCourse(course)}
  }, [id]);

  //const sanitizedcourseDescriptionHTML = DOMPurify.sanitize(courseDescription);

  return (
    <>
    <section>
    <div className="font-bold text-2xl underline my-2">{course.courseTitle}</div>
    <img src={course.courseThumbnail} className="rounded-lg"></img>
    <hr className="my-2"/>
    </section>
    <nav className="px-2 mr-2 flex justify-between items-center align-middle text-center bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 h-12 text-black rounded-xl">
      <ul className='flex items-center justify-around align-middle w-full
        text-zinc-600 font-bold text-xl cursor-pointer'>
          <Link to={`/students/course/${course._id}/description`} state={course}><li>Description</li></Link>
          <Link to={`/students/course/${course._id}/course-content`} state={course}> <li>Course Content</li></Link>
          <Link to={`/students/course/${course._id}/course-reviews`} state={course}> <li>Reviews</li></Link>
      </ul>
    </nav>
    <Outlet/>
    {/*<Link to ="/students/demo" className="outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 underline mt-5
    shadow-custom-light shadow-3d transform hover:scale-120 hover:shadow-3xl transition duration-500 ease-in-out
      ">Go to Course</Link>*/}
  </>)
}
export default CourseDetails
