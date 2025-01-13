import React from 'react'
import { Link } from 'react-router-dom'

import Error from '@/assets/404-morte.jpg'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-800'>
      <img src={Error} alt="image 404 dead" />
      <h1 className='text-white text-xl mt-6'>Oops... Essa pagina não existe.</h1>
      <p className='text-white mt-3'>Retorne para pagina inicial clicando no botão abaixo</p>
      <Link to='/'>
      <button className='bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-3'>Clique aqui</button>
      </Link>
    </div>
  )
}

export default NotFound