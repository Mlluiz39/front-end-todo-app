import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

import TaskImage from '../assets/list_task.png'

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <section className="flex justify-between items-center m-2 bg-slate-700 rounded-lg p-3">
        <div className=" flex items-center text-xl">
          <FaCalendarAlt className="text-white" />

          <h1 className="text-lg text-white mx-3">TodoApp</h1>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-3">
            <div className="flex items-center justify-center">
              <a
                href="/login"
                className="text-white mx-3 opacity-100 hover:opacity-50"
              >
                Login
              </a>

              <a
                href="/sobre"
                className="text-white mx-3 opacity-100 hover:opacity-50"
              >
                Sobre
              </a>
            </div>
          </nav>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-2xl text-center text-sky-700 mt-4">Bem vindo ao TodoApp</h1>
            <p className="text-center text-sky-600 mt-3">
              Aqui voce pode cadastrar suas tarefas e acompanhar o andamento delas. <br />
              Com o TodoApp voce pode ter uma visão geral de suas tarefas e
              também pode filtrar por data de cadastro, data de conclusão e status.
              </p>
              <img className='w-96 mx-auto my-3' src={TaskImage} alt="imagem lista de tarefas" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
