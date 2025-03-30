import React,{useState} from 'react';
import ReactPlayer from 'react-player/lazy'
import CourseTab from '../../components/students/CourseTab';
const DemoPage = () => {
  const data = [{
    id:1,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Rendering in JSX"
  },{
    id:2,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"State management"
  },{
    id:3,
    chapters:[{
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Redux"
  },{
    id:4,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Lifecycle or effects"
  },{
    id:5,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Lifecycle or effects"
  },{
    id:6,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Lifecycle or effects"
  },{
    id:7,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Lifecycle or effects"
  },{
    id:8,
    chapters:[{
      id:1,
      url:"https://www.youtube.com/watch?v=fO3D8lNs10c",
      name:"Basics of JSX"
    },
    {
      id:2,
      url:"https://www.youtube.com/watch?v=OfQDqMOzTD4",
      name:"JSX in depth"
    },
    {
      id:3,
      url:"https://www.youtube.com/watch?v=_ze46JgZpd4",
      name:"JSX Alternative "
    },
    {
      id:4,
      url:"https://www.youtube.com/watch?v=WlhFIulWcGQ",
      name:"Conditional Rendering"
    },
    ],
    courseName:"Lifecycle or effects"
  }
  ]
  const [currentPlayingCourseVideo, setCurrentPlayingCourseVideo] = useState(["https://www.youtube.com/watch?v=fO3D8lNs10c",
  "Basics of JSX"]);

  return (
    <div className="flex md:flex-row flex-col md:justify-between align-middle items-center ">
      <div>
        <section className='text-xl font-bold'>{ currentPlayingCourseVideo[1]}
        </section>
        <hr className='mb-2'/>
      <ReactPlayer url={currentPlayingCourseVideo[0]}controls = {true} />
      </div>
      <div className='px-10 border-purple-700 border-4 max-h-110 overflow-y-auto'>
        {
          data.map((course,id) => <CourseTab key={id} course={course} setCurrentPlayingCourseVideo={setCurrentPlayingCourseVideo} />)
        }
      </div>
      </div>
  );
};
export default DemoPage;
