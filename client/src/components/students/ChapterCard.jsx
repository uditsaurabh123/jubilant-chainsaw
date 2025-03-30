import React,{useState} from 'react';
const ChapterCard = ({ chapter: { url, name }, setCurrentPlayingCourseVideo }) => {
  const [chapterCompleted, setChapterCompleted] = useState(false);
  return (
    <div className='flex my-3 md:w-md bg-white-100 justify-stretch items-center border border-white p-4 cursor-pointer shadow-custom-light shadow-3d
    transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out' >
      <input onClick={(state)=>setChapterCompleted(!state)}type="checkbox" className={`form-checkbox text-indigo-600 h-6 w-6 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 ${chapterCompleted?"checked":""}`} />
      <div className='ml-15'
      onClick={()=>setCurrentPlayingCourseVideo([url,name])}
      >{name} </div>
    </div>
  );
};
export default ChapterCard;
