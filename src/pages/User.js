import React, { useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/UserForm/styles'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  )
}
