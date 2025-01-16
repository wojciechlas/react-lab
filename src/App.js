import './App.css';
import MovieForm from './MovieForm';
import MoviesList from './MoviesList';
import {useState} from 'react';
import 'milligram'

function App() {

  const [movies, setMovies] = useState([]);

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <MoviesList movies={movies}/>
          <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel='Add movie'/>
      </div>
  );
}

export default App;
