import React from 'react'
import { Link } from 'react-router-dom'
function BecomeEducators() {
  return (
    <div>BecomeEducators
      <Link to="/educator/create-course">
        <button

          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 mx-1"
        >
          Create a new course
        </button>
      </Link>

    </div>
  )
}

export default BecomeEducators