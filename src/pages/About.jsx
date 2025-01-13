import React from 'react'

import Startup from '@/assets/startup.png'
import HomeLogin from '@/pages/HomeLogin'

function About () {
  return (
    <>
    <HomeLogin />
    <div className="py-16 bg-white mt-12 mx-3 shadow-2xl rounded-md">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="flex justify-center items-center md:5/12 lg:w-8/12 gap-10">
            <div>
              <img
                className="object-cover object-center rounded-lg shadow-lg"
                src={Startup}
                alt="image startup de people"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Aplicação todo App
              </h2>
              <p className="mt-6 text-gray-600">Aplicação para registrar tarefas de uma forma simples e segura !!!
              <br />
              Para que você possa se organizar melhor e não esquecer de nada.
              </p>
              <p className="mt-4 text-gray-600">
                {' '}
                Desenvolvido por: <strong>Marcelo Luiz</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
