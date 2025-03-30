import React,{useState} from 'react';
import ChapterCard from './ChapterCard';
const CourseTab = ({course: {courseName,chapters=[] },setCurrentPlayingCourseVideo }) => {
  const [showChapters, setshowChapters] = useState(false);
  return (
    <>
    <div
      onClick={()=>{setshowChapters(show=>!show)}}
      className="my-3 rounded-md md:w-md flex bg-gray-100 justify-center items-center border border-gray-200 p-4 cursor-pointer shadow-custom-light shadow-3d
      transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out
      ">
      <div className='text-xl text-purple-800 font-bold underline px-7
        shadow-custom-light shadow-3d
        transform hover:scale-120 hover:shadow-3xl transition duration-500 ease-in-out
        '>{courseName}</div>
    </div>
    {showChapters&&chapters.length!==0 && chapters.map((chapter,index)=>{
      return(<ChapterCard key={index} chapter={chapter} setCurrentPlayingCourseVideo={setCurrentPlayingCourseVideo} />)
    })}
    </>
  );
};
export default CourseTab;
