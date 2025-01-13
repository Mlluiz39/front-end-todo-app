import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '@/shared/services/api'

import 'react-toastify/dist/ReactToastify.css'
import HomeTask from './HomeTask'

const ListTask = () => {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState(null) // Estado para armazenar a tarefa em edição
  const [editData, setEditData] = useState({ title: '', description: '' }) // Dados da tarefa em edição

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const response = await api.get('/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      const tasksWithValidDone = response.data.map(task => ({
        ...task,
        completed: task.completed || false,
      }))
      setTasks(tasksWithValidDone)
    } catch (err) {
      setError('Erro ao carregar tarefas')
      toast.error('Erro ao carregar tarefas')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleEditClick = (id, task) => {
    setEditingTaskId(id)
    setEditData({ title: task.title, description: task.description })
  }

  const handleEditChange = (field, value) => {
    setEditData({ ...editData, [field]: value })
  }

  const handleEditSave = async id => {
    try {
      const response = await api.put(`todos/${id}`, editData)
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, ...response.data } : task
        )
      )
      toast.success('Tarefa editada com sucesso!')
      setEditingTaskId(null) // Finalizar edição
    } catch (error) {
      toast.error('Erro ao editar tarefa')
    }
  }

  const handleEditCancel = () => {
    setEditingTaskId(null)
    setEditData({ title: '', description: '' })
  }

  const handleDelete = async id => {
    try {
      await api.delete(`todos/${id}`)
      toast.success('Tarefa excluída com sucesso')
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      toast.error('Erro ao excluir tarefa')
    }
  }

  const toggleDone = async id => {
    try {
      const task = tasks.find(task => task.id === id)
      await api.put(`todos/${id}`, { ...task, completed: !task.completed })
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      )
    } catch (error) {
      toast.error('Erro ao atualizar tarefa')
    }
  }

    return (
      <>
        <HomeTask />
        <div className="task-list p-4 max-w-3xl mx-auto">
          {tasks.length === 0 ? (
            <p className="text-center text-lg text-gray-500">
              Nenhuma tarefa cadastrada
            </p>
          ) : (
            tasks.map(task => (
              <div
                className="task-item bg-white border border-gray-200 p-4 rounded-lg shadow-sm mb-4 hover:bg-gray-50 transition overflow-auto break-words"
                key={task.id}
              >
                {editingTaskId === task.id ? (
                  <div className="task-edit">
                    <input
                      type="text"
                      value={editData.title}
                      onChange={e => handleEditChange('title', e.target.value)}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Título"
                    />
                    <textarea
                      value={editData.description}
                      onChange={e =>
                        handleEditChange('description', e.target.value)
                      }
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Descrição"
                    />
                    <div className="flex gap-2">
                      <button
                        className="save-button bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition"
                        onClick={() => handleEditSave(task.id)}
                      >
                        Salvar
                      </button>
                      <button
                        className="cancel-button bg-gray-500 text-white py-1 px-3 rounded-lg hover:bg-gray-700 transition"
                        onClick={handleEditCancel}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="task-header flex justify-between items-center">
                      <h3
                        className={`text-xl font-semibold ${
                          task.completed ? 'line-through text-gray-400' : 'text-sky-800'
                        }`}
                      >
                        {task.title}
                      </h3>
                      <div className="flex flex-col gap-3">
                        <button
                          className="delete-button bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
                          onClick={() => handleDelete(task.id)}
                        >
                          Excluir
                        </button>
                        <button
                          className="edit-button bg-amber-500 text-white py-1 px-3 rounded-lg hover:bg-amber-700 transition"
                          onClick={() => handleEditClick(task.id, task)}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                    <p
                      className={`task-description mt-2 ${
                        task.completed ? 'line-through text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {task.description}
                    </p>
                    <div className="task-footer flex items-center mt-4">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleDone(task.id)}
                        className="mr-2 h-5 w-5"
                      />
                      <span
                        className={`${
                          task.completed ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {task.completed ? 'Concluída' : 'Pendente'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
        <ToastContainer />
      </>
    )
  }

  export default ListTask