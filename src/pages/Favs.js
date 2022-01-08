import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout 
    title='Tus favoritos'
    subtitle='Aquí puedes encontrar tus favoritos'
  >      
    <FavsWithQuery />
  </Layout>
)
