// eslint-disable-next-line import-helpers/order-imports
import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  // Definindo os estados para o usuário e a validade do token
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  )
  const [tokenValid, setTokenValid] = useState(!!localStorage.getItem('token'))

  // Função para login que armazena o token e o usuário no estado e no localStorage
  const login = async userInfo => {
    try {
      if (userInfo?.token) {
        localStorage.setItem('token', userInfo.token)

        // Verifica se as informações do usuário existem
        if (userInfo) {
          setUser(userInfo) // Armazena as informações do usuário no estado
          localStorage.setItem('user', JSON.stringify(userInfo)) // Armazena no localStorage
          setTokenValid(true) // Marca o token como válido
        } else {
          console.error('Erro ao buscar informações do usuário.')
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login.', error)
    }
  }

  // Função de logout que limpa os dados do usuário e o token
  const logout = () => {
    setUser({})
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setTokenValid(false)
  }

  // Verifica se há um usuário e um token armazenados no localStorage ao iniciar
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const storedToken = localStorage.getItem('token')

    if (storedUser && storedToken) {
      setUser(storedUser) // Armazena o usuário do localStorage
      setTokenValid(true) // Marca o token como válido
    }
  }, [])

  // Retorna o contexto com os valores para o token e o usuário
  return (
    <UserContext.Provider value={{ user, login, logout, tokenValid }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
