/* eslint-disable react/react-in-jsx-scope */

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '@/shared/services/api'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import HomeLogin from './HomeLogin'

const RegisterUser = () => {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('Digite um email valido!').required('O email é obrigatório!'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres!')
  })

  const { register, handleSubmit, formState: { errors } } = useForm(
    { resolver: yupResolver(schema) }
  )

  const registerSubmit = async clientData => {
    try {
      const { status } = await api.post('/auth/register', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      }, { validateStatus: () => true }
      )
      if (status === 200 || status === 201) {
        toast.success('Cadastro realizado com sucesso!')

        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Erro de sistema, tente novamente!')
    }
  }

  return (
    <>
      <HomeLogin />
      <div>
        <div className="relative mt-32 flex flex-col sm:justify-center items-center">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor="email"
                className="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Cadastrar
              </label>
              <form className="mt-10" noValidate onSubmit={handleSubmit(registerSubmit)}>
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0  outline-none"

                    {...register('name', { required: true })}

                  />
                  <p className='text-red-700 mx-1 mt-1'>{errors.name?.message}</p>
                </div>

                <div className="mt-7">
                  <input
                    type="email"
                    placeholder="Email"
                    className=" px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 outline-none"

                    {...register('email', { required: true })}
                  />
                  <p className='text-red-700 mx-1 mt-1'>{errors.email?.message}</p>
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Senha"
                    className=" px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 outline-none"

                    {...register('password', { required: true })}
                  />
                  <p className='text-red-700 mx-1 mt-1'>{errors.password?.message}</p>
                </div>

                <div className="mt-7">
                  <button
                   type='submit'
                   className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Registrar
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">Ja tem conta?</label>
                    <Link
                      to="/login"
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Iniciar sessão
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme='colored'/>
    </>
  )
}

export default RegisterUser
