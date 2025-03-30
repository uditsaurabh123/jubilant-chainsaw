import React from 'react';
import { useLocation } from 'react-router-dom'


const CourseContent = () => {
  const location = useLocation()
  const state = location.state
  console.log("this is state --->",state)
  return (
    <div>
      Course Content
    </div>
  );
};
export default CourseContent;
