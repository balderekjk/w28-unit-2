import React from 'react';

const MovieCard = ({ movie, addMovie, removeMovie, watchlist }) => {
  let inWatchlist = watchlist.filter((film) => {
    return film.id === movie.id;
  });
  let button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div className="image-box">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
        {button}
      </div>
    </div>
  );
};

export default MovieCard;
