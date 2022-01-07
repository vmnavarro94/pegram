import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const useGetFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
  return { data, loading, error }
}

export const FavsWithQuery = () => {
  const { data, loading, error } = useGetFavs()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

