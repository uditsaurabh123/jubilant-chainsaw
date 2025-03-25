import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import {
  useClerk,
  useUser,
  SignOutButton,
  SignUpButton,
} from '@clerk/clerk-react'
const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  console.log(user)
  return (
    <>
      {user && (
        <div className="tracking-wider text-xl text-purple-500 mb-2 font-bold text-">
          Welcome back,{' '}
          {user.firstName[0].toUpperCase() + user.firstName.slice(1)}{' '}
        </div>
      )}
      <div className="flex justify-between items-center bg-purple-100 p-3">
        <img src={assets.logo} alt="logo" className="w-28 cursor-pointer" />
        <div className="flex items-center gap-5 text-gray-500">
          <div>
            <Link to="" className="mx-1 border border-blue-500 p-2">
              Become Educators
            </Link>
            <Link
              to="/students/my-Enrollmemnts"
              className="mx-1 border border-blue-500 p-2"
            >
              My Enrollments
            </Link>
          </div>
          <div>
            {user ? (
              <>
                <SignOutButton className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" />
                {/*<span className="ml-1"><UserButton/></span>*/}
              </>
            ) : (
              <>
                <button
                  onClick={() => openSignIn()}
                  type="button"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mx-1"
                >
                  SignIn
                </button>
                <SignUpButton className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" />
              </>
            )}
          </div>
        </div>
        {/* code for mobile screen */}
      </div>
    </>
  )
}

export default Navbar
