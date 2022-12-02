import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({ movieList, page, setPage, list, removeMovie, addMovie}) => {
    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);

    const MovieDisplay = movieList.map((movie, index) => {
            return <MovieCard movie={movie} addMovie={addMovie} list={list} removeMovie={removeMovie}/>
    })

  return (
    <div className='page'>
        <h1>Kat's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
            <div>
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
        <div className='movie-container'>{MovieDisplay}</div>
    </div>
  )
}

export default MovieScreen;