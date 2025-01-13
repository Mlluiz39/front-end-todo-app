import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import useUser from '@/hooks/useUser'

const HomeTask = () => {
  const navigate = useNavigate()
  const { logout } = useUser()
  const removeUser = async () => {
    await logout()

    navigate('/login')
  }

  return (
    <div className="w-full mx-auto">
      <section className="flex flex-wrap justify-between items-center m-2 bg-slate-700 rounded-lg p-3">
        {/* Logo Section */}
        <div className="flex items-center text-xl">
          <FaCalendarAlt className="text-white" />
          <h1 className="text-lg text-white mx-3">TodoApp</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center">
          <nav className="p-3">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/cadastrar"
                className="text-white mx-3 opacity-100 hover:opacity-50 whitespace-nowrap"
              >
                Cadastrar
              </Link>
              <Link
                to="/listar"
                className="text-white mx-3 opacity-100 hover:opacity-50 whitespace-nowrap"
              >
                Listar
              </Link>
              <Link
                to="/"
                className="text-white mx-3 opacity-100 hover:opacity-50 bg-red-600 px-3 py-1 rounded-lg whitespace-nowrap"
                onClick={removeUser}
              >
                Sair
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default HomeTask
