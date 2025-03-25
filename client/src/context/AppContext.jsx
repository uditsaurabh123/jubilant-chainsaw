import React, { createContext, useState } from 'react'
import { dummyCourses } from '../assets/assets'
import { useEffect } from 'react'
import {
  useUser
} from '@clerk/clerk-react'

const AppContext = createContext()
const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY
  const [allCourses, setAllCourses] = useState([])
  const [value, setValue] = useState({ currency, allCourses })

  const { user } = useUser()


  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    setAllCourses(dummyCourses)
    setValue((state) => {
      return { ...state,user, allCourses: dummyCourses, }
    })
  }

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }
