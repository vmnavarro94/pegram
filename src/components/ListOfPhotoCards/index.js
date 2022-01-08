import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { List } from './styles'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <List>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)
      }
    </List>
  )
}
