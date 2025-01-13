import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { CiLogin } from 'react-icons/ci'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const HomeLogin = () => {
  return (
    <div className="w-full mx-auto">
      <section className="flex justify-between items-center bg-indigo-600 p-3">
        <div className="flex items-center text-xl">
          <FaCalendarAlt className="text-white" />
          <Link to="/">
            <h1 className="text-lg font-semibold text-white mx-3">TodoApp</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-3">
            <div className="flex space-x-6">
              <Link
                to="/login"
                className="flex items-center text-white text-sm opacity-100 hover:opacity-50"
              >
                <CiLogin className="mr-2 text-lg" /> Entrar
              </Link>
              <Link
                to="/sobre"
                className="flex items-center text-white text-sm opacity-100 hover:opacity-50"
              >
                <IoIosInformationCircleOutline className="mr-2 text-lg" /> Sobre
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default HomeLogin
