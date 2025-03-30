import React from 'react'
const MyEnrollments = ({enrollments=[]}) => {
  return (<><div className='flex justify-center align-middle'>
    {enrollments.length === 0 ? <div className='text-6xl font-bold m-5 p-5 text-purple-700'>No Enrollments </div> : <div>{/*To be customized */ }{ enrollments}</div>}
  </div></>
  )}
export default MyEnrollments
