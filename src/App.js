import './App.css';
import {useState} from 'react';
import 'milligram'

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  function handleChangeTitle(event) {
      setTitle(event.target.value);
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  let message;

  if (title.length < 5) {
    message = 'Tytuł jest za krótki.';
  } else if (title.length < 15) {
    message = 'Tytuł jest w sam raz na plakat przed kinem!';
  } else {
    message = 'Tytuł jest za długi, nikt tego nei zapamięta.';
  }

  function addMovie(event) {
    if (title.length < 5) {
      alert('Tytuł jest za krótki.');
      return;
    }
    if (year.length !== 4) {
      alert('Rok musi mieć 4 cyfry.');
      return;
    }

    const newMovie = {
      title: title,
      year: year
    }
    setMovies([...movies, newMovie]);
    return;
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
          </ul>
          <h2>Add movie</h2>
          <h3>Title</h3>
          <input type='text' value={title} onChange={handleChangeTitle}/>
          {
            title.length > 0 && <p>{message}</p>
          }
          <h3>Year</h3>
          <input type='text' value={year} onChange={handleChangeYear}/>
          <button onClick={addMovie}>Add movie</button>
      </div>
  );
}

export default App;
