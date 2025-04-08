import React from 'react';
import { useLocation } from 'react-router-dom'
const CourseReviews = () => {
  const location = useLocation()
  const state = location.state
  
  return (
    <div>
      Course Reviews
    </div>
  );
};
export default CourseReviews;
