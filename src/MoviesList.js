export default function MoviesList(props) {
    if (props.movies.length === 0) {
        return <div><p>No movies yet. Maybe add something?</p></div>
    }

    return <div>
    <h2>Titles</h2>
    <ul>
    {props.movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})<button class="button button-clear" onClick={() => props.onMovieDelete(movie)}>Delete</button></li>)}
    </ul>
    </div>
}
