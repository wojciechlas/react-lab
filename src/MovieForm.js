import {useState} from 'react';

export default function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    function addMovie(event) {
        event.preventDefault();

        if (title.length < 5) {
          alert('Tytuł jest za krótki.');
          return;
        }
        if (year.length !== 4) {
          alert('Rok musi mieć 4 cyfry.');
          return;
        }

        props.onMovieSubmit({title, year});
        setTitle('');
        setYear('');
    }
    
    return <form onSubmit={addMovie}>
        <h2>Add movie</h2>
        <div>
            <label>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div>
            <label>Year</label>
            <input type='text' value={year} onChange={(event) => setYear(event.target.value)}/>
        </div>
        <button>{props.buttonLabel || 'Submit'}</button>
    </form>
}