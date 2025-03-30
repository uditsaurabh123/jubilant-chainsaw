import React from 'react'
import { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/students/CourseCard'
import Tag from '../../components/students/Tag'

const CoursesList = () => {
  const {input=""} = useParams()
  const tagList = input&&input.split(" ")
  const {
    value: { allCourses, currency },
  } = useContext(AppContext)

  const [tagListState, setTagList] = useState(tagList);
  const removeTagFromTagList=(ToRemoveTag)=>{
    const tagList = tagListState.filter(tag=>ToRemoveTag!==tag)
    setTagList(tagList)
  }
  return (
    <div>
      <h1 className="underline font-sans font-thin text-xl text-purple-400">
        Courses Lists
      </h1>
      <section
      className='flex align-middle items-center'
      >{Array.isArray(tagListState)&&tagListState.map((tag, id) => <Tag key={id + 1} tagName={tag} setTagList={setTagList } removeTagFromTagList={removeTagFromTagList}/>)}</section>
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
