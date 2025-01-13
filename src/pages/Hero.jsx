import React from 'react'
import { FaRegStar, FaArrowRight } from 'react-icons/fa'

import HomeLogin from './HomeLogin'

const Hero = () => {


  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    {/* HomeLogin fixo no topo */}
    <div className="fixed top-0 left-0 w-full z-10">
      <HomeLogin />
    </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-violet-100 text-violet-700">
              <FaRegStar className="h-4 w-4 mr-2" />
              Aumente sua produtividade
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Organize sua vida</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                com o TodoApp
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Assuma o controle das suas tarefas, aumente sua produtividade e
              alcance seus objetivos com nosso sistema intuitivo e poderoso de
              gerenciamento de tarefas.
            </p>
            <div className="flex gap-4 pt-4 w-full max-w-xs justify-center">
              <div className="flex flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 flex items-center rounded-lg">
                  Começar Agora
                  <FaArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto opacity-30 blur-lg bg-gradient-to-r from-indigo-400 to-violet-400" />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white p-2 ring-1 ring-gray-900/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072"
                  alt="Painel de Gerenciamento de Tarefas"
                  className="rounded-xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
