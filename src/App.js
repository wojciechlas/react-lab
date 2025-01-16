import './App.css';
import {useState} from 'react';
import 'milligram'

function App() {
  const [title, setTitle] = useState('Wall-E');

  function handleChange(event) {
      setTitle(event.target.value);
  }

  let message;

  if (title.length < 5) {
    message = 'Tytuł jest za krótki.';
  } else if (title.length < 15) {
    message = 'Tytuł jest w sam raz na plakat przed kinem!';
  } else {
    message = 'Tytuł jest za długi, nikt tego nei zapamięta.';
  }

  const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          <h2>My favourite movie for today is {title}</h2>
          {
            title.length > 0 && <h3>{message}</h3>
          }
          <input type='text' value={title} onChange={handleChange}/>
          <button onClick={ () => alert(title) }>Pokaż tytuł filmu</button>
      </div>
  );
}

export default App;
