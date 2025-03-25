import React from 'react'
import './App.css'
import { AppProvider } from './context/AppContext'
import { Route, Routes, useMatch } from 'react-router-dom'
import Navbar from './components/students/Navbar'
import SignIn from './pages/students/signin'
import TestimonialsSection from './components/students/TestimonialsSection'

const Home = React.lazy(() => import('./pages/students/Home'))
const CoursesList = React.lazy(() => import('./pages/students/CoursesList'))
const CourseDetails = React.lazy(() => import('./pages/students/CourseDetails'))
const MyEnrollments = React.lazy(() => import('./pages/students/MyEnrollments'))
const Player = React.lazy(() => import('./pages/students/Player'))
const Loading = React.lazy(() => import('./pages/students/Loading'))

const Educator = React.lazy(() => import('./pages/educator/Educator'))
const Dashboard = React.lazy(() => import('./pages/educator/Dashboard'))
const AddCourse = React.lazy(() => import('./pages/educator/AddCourse'))
const MyCourses = React.lazy(() => import('./pages/educator/MyCourses'))
const StudentEnrolled = React.lazy(
  () => import('./pages/educator/StudentEnrolled'),
)
const CURRENCY = import.meta.env.VITE_CURRENCY

const value = {
  CURRENCY,
}

function App() {
  const isEducator = useMatch('/educator*')

  const VITE_CLERK_PUBLISHABLE_KEY =
    'pk_test_c29saWQtc3RhcmZpc2gtNTUuY2xlcmsuYWNjb3VudHMuZGV2JA'
  return (
    <div className="min-h-screen text-default m-6">
      {!isEducator && <Navbar />}
      <h1 className="text-purple-300">LearnEase - Code With Ease</h1>
      <AppProvider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Home />} />
          <Route path="/students/courses-List" element={<CoursesList />} />
          <Route
            path="/students/courses-List/:input"
            element={<CoursesList />}
          />
          <Route path="/students/course/:id" element={<CourseDetails />} />
          <Route path="/students/my-Enrollmemnts" element={<MyEnrollments />} />
          <Route
            path="/students/my-Enrollmemnt/:id"
            element={<MyEnrollments />}
          />
          <Route path="/students/player" element={<Player />} />
          <Route path="/students/player/:playerid" element={<Player />} />
          <Route path="/students/sign-in" element={<SignIn />} />
          <Route path="/loading/:path" element={<Loading />} />
          <Route path="/educator" element={<Educator />}>
            <Route path="/educator" element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="student-enrolled" element={<StudentEnrolled />} />
          </Route>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App
