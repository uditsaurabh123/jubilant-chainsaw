import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  const [SearchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const searchBasedOnsearchTerm = () => {
    if (SearchTerm !== '') {
      setSearchTerm('')
      console.log(SearchTerm)
      navigate(`/students/courses-List/${SearchTerm}`)
    }
  }

  return (
    <div>
      <div>
        <FaSearch
          className="relative left-125 top-10 text-purple-500 cursor-pointer"
          onClick={() => {
            searchBasedOnsearchTerm()
          }}
        />
        <>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="e.g., HTML CSS JavaScript Tailwind"
          className="w-lg p-5 border text-blue-300- border-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400 hover:text-purple-500
              "
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          value={SearchTerm}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              searchBasedOnsearchTerm()
            }
          }}
        />

      </>
        </div>
        <small className="text-gray-500 font-bold">Separate each keyword with a space.</small>
    </div>
  )
}
export default Searchbar
