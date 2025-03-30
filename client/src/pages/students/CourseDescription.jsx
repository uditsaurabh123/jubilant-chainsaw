import React,{useContext} from 'react';
import { useLocation,Link } from 'react-router-dom'
import DOMPurify from 'dompurify';
import { AppContext } from '../../context/AppContext'

const CourseDescription = () => {
  const location = useLocation()
  const state = location.state
  console.log("this is state --->",location,Object.keys(state))

  const sanitizedHtml = DOMPurify.sanitize(state.courseDescription);
  const {
    value: { currency },
  } = useContext(AppContext)

  return (
  (state&&Object.keys(state).length!==0)&&(<>
    <div className="text-lg"
    dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    >
    </div>
    <div className='flex justify-around items-center align-middle my-2'>
      <div className="text-xl text-red-700 font-bold">
      <section>Original Price:  {currency} {state.coursePrice }</section>
      <section>Discount:  {state.discount } %</section>
      </div>
    <Link to ="/students/demo" className="flex justify-evenly items-center align-middle outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 underline mt-5
    shadow-custom-light shadow-3d transform hover:scale-120 hover:shadow-3xl transition duration-500 ease-in-out
    w-1/2
      ">Go to Course</Link>
  </div>
    </>)
  );
};
export default CourseDescription;
