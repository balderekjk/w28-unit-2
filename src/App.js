import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => {
    return setWatchlist([...watchlist, movie]);
  };

  const removeMovie = (movie) => {
    let newState = watchlist.filter((item) => item !== movie);
    setWatchlist(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <div class="flex-row">
          <MovieScreen
            movieList={movieList}
            watchlist={watchlist}
            page={page}
            setPage={setPage}
            addMovie={addMovie}
            removeMovie={removeMovie}
          />

          <Watchlist watchlist={watchlist} removeMovie={removeMovie} />
        </div>
      </main>
    </div>
  );
}

export default App;
