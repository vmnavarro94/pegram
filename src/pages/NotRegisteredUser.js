import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algún proglema.'

                  return <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} disabled={loading} />
                }
              }
            </RegisterMutation>
            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario o contraseña son incorrectos'

                  return <UserForm onSubmit={onSubmit} title='Iniciar Sesión' error={errorMsg} disabled={loading} />
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
