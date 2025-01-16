import './App.css';
import {useState} from 'react';

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

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          {
            title.length > 0 && <h3>{message}</h3>
          }
          <input type="text" value={title} onChange={handleChange}/>
      </div>
  );
}

export default App;
