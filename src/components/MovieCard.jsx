import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
// import './App.css'


const MovieCard = (props) => {
  const {title,release_date,poster_path} = props.movie
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(props.movie.id)
  function onFavoriteMovie(e){
    e.preventDefault()
    if(favorite) removeFromFavorites(props.movie.id)
      else addToFavorites(props.movie)
  }
  return (
    <div className="card-container">
      <div className='card-image-container'>
        {/* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> */}
        <div className="button-container"><button className={`favorite-btn ${favorite ?"active": "      " }`} onClick={onFavoriteMovie}> 	&#9829; </button></div>
      </div>
      <div>
        <p>{title}</p>
        <p>{release_date?.split("-")[0]}</p>
      </div>      
    </div>
  )
}

export default MovieCard
