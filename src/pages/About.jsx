import React from 'react'

import Startup from '@/assets/startup.png'
import HomeLogin from '@/pages/HomeLogin'

function About() {
  return (
    <>
      <HomeLogin />
      <div className="py-16 bg-white mt-12 mx-3 shadow-2xl rounded-md">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 flex flex-col-reverse md:flex-row md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Aplicação Todo App
              </h2>
              <p className="mt-6 text-gray-600">
                Aplicação para registrar tarefas de uma forma simples e segura !!!
                <br />
                Para que você possa se organizar melhor e não esquecer de nada.
              </p>
              <p className="mt-4 text-gray-600">
                Desenvolvido por: <strong>Marcelo Luiz</strong>
              </p>
            </div>
            <div className="md:w-5/12 lg:w-6/12 flex justify-center items-center">
              <img
                className="object-cover object-center rounded-lg shadow-lg"
                src={Startup}
                alt="Imagem de startup de pessoas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
