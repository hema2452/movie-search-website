import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


const Favourite = () => {
  const {favorites} = useMovieContext()
  if (favorites){
    return (
      <div className='movies-grid'>
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}

      </div>
    )

  }
  return (
    <div>
      <h1>No Favouties were added</h1>
    </div>
  )
}

export default Favourite
