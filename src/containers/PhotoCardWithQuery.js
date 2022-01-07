import React from 'react'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { PhotoCard } from '../components/PhotoCard'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
