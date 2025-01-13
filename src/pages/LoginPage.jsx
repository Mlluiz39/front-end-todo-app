import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import useUser from '@/hooks/useUser'
import HomeLogin from '@/pages/HomeLogin'
import { api } from '@/shared/services/api'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const LoginPage = () => {
  const { login } = useUser()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email valido!')
      .required('O email é obrigatório!'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 caracteres!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleLogin = async clientData => {
    try {
      const { status, data } = await api.post(
        '/auth/login',
        {
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      )
      if (status === 200 || status === 201) {
        login(data)
        toast.success('Login realizado com sucesso!')

        setTimeout(() => {
          navigate('/cadastrar')
        }, 2000)
      } else if (status === 401) {
        toast.error('Email ou senha incorretos!')
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
      <form onSubmit={handleSubmit(handleLogin)}>
        <section className="w-80 mx-auto md:w-auto flex justify-center xl:w-auto">
          <div className="text-gray-800">
            <div className="flex xl:justify-center lg:flex-col justify-center items-center flex-wrap">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:m-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <p></p>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <section>
                  <div className="mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput3"
                      name="email"
                      placeholder="Email"
                      {...register('email', { required: true })}
                    />
                    <p className="text-red-700 mx-1 mt-1">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput4"
                      name="password"
                      placeholder="Senha"
                      {...register('password', { required: true })}
                    />
                  </div>
                  <p className="text-red-700 mx-1 mt-1">
                    {errors.password?.message}
                  </p>
                  <div className="flex justify-center items-center gap-8 my-4 ">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck3"
                      />
                      <label
                        className="px-2 form-check-label inline-block text-gray-800 text-sm leading-snug font-normal align-center"
                        htmlFor="exampleCheck3"
                      >
                        Lembrar de mim
                      </label>
                    </div>
                    <div className="flex justify-center items-center">
                      <a
                        href=""
                        className="text-gray-800
                    text-sm leading-snug font-normal align-center transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>

                  <div className="text-center lg:text-center">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <div className="flex justify-center items-center">
                      <p className="text-sm font-semibold mt-2 pt-1">
                        Não tem uma conta?
                      </p>
                      <Link
                        to={'/registrar'}
                        className="mx-2 pt-3 text-red-600 font-medium hover:text-red-700
                      focus:text-red-700 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                      >
                        Cadastre-se ou
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </form>
      <ToastContainer />
    </>
  )
}

export default LoginPage
