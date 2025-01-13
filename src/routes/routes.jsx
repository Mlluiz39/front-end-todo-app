import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '@/pages/About'
import AddTask from '@/pages/AddTask'
import Home from '@/pages/Home'
import ListTask from '@/pages/ListTask'
import LoginPage from '@/pages/LoginPage'
import NotFound from '@/pages/NotFound'
import RegisterUser from '@/pages/RegisterUser'

import PrivateRoute from './private.routes'

const MyRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registrar" element={<RegisterUser />} />
      <Route path="sobre" element={<About />} />
      <Route exact path='/' element={<PrivateRoute/>}>
      <Route path="cadastrar" element={<AddTask />} />
      <Route path="listar" element={<ListTask />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes
