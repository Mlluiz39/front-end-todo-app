import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import HomeTask from '@/pages/HomeTask'
import { api } from '@/shared/services/api'

const AddTask = () => {
  const userId = JSON.parse(localStorage.getItem('user')).user.id

  const token = localStorage.getItem('token')
  if (!token) {
    console.log('Token não encontrado')
  }

  const [myId] = useState(userId)
  const { register, handleSubmit, resetField } = useForm({
    mode: 'onChange',
    defaultValues: { title: '', description: '' }
  })

  const resetFieldTitle = () => resetField('title')
  const resetFieldDescription = () => resetField('description')

  const taskSubmit = async taskData => {
    try {
      const { title, description } = taskData

      if (!title || !description) {
        toast.error('Título e descrição são obrigatórios!')
        return
      }

      const dataToSend = {
        title,
        description,
        userId: myId
      }

      await toast.promise(
        api.post('/todos', dataToSend, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }),
        {
          pending: 'Criando a tarefa...',
          success: 'Tarefa criada com sucesso!',
          error: 'Erro ao criar a tarefa'
        }
      )
      resetFieldTitle()
      resetFieldDescription()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <HomeTask />
      <section>
        <form onSubmit={handleSubmit(taskSubmit)}>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                      i
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Criar tarefa</h2>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        Crie sua tarefa agora!
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="hidden">
                        <label className="leading-loose">id</label>
                        <input
                          type="text"
                          className="py-2 border focus:ring-gray-500 focus:border-gray-400 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          name="user_id"
                          value={myId}
                          {...register('user_id', { required: true })}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="leading-loose">Titulo</label>
                        <input
                          type="text"
                          className="py-2 border focus:ring-gray-500 focus:border-gray-400 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          name="title"
                          {...register('title', { required: true })}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="leading-loose">Descrição</label>
                        <textarea
                          type="text"
                          className="border h-32 focus:ring-gray-500 focus:border-gray-400 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none"
                          name="description"
                          {...register('description', { required: true })}
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button className="flex justify-center items-center w-full bg-red-600 text-white px-4 py-3 rounded-md focus:outline-none">
                        Cancel
                      </button>
                      <button
                        className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        type="submit"
                      >
                        Criar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <ToastContainer autoClose={2500} />
    </>
  )
}

export default AddTask
