import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    // We can use the async/await syntax to make our code more readable.
    const fetchMoviesHandlerAwait = useCallback(async () => {
        // When starting fetching data, we set the isLoading state to true.
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://swapi.dev/api/films/', {
                // We don't need to set the method to GET because it is the default method. Anyways, we can set it to GET.
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                };
            });
            setMovies(transformedMovies);
            // When end of  fetching data, we set the isLoading state to true.
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            // When end of  fetching data, we set the isLoading state to true.
            setIsLoading(false);
        }
    }, []);


    // Also we can use the .then() method to get the response from the server.
    const fetchMoviesHandler = () => {
        fetch('https://swapi.dev/api/films/', {
            // We don't need to set the method to GET because it is the default method. Anyways, we can set it to GET.
            method: 'GET',
        }).then((response) => {
            // We can use the .then() method to get the response from the server.
            // The response is a JavaScript object that contains the data we need.
            // We can use the .json() method to convert the response to a JavaScript object.
            return response.json();
        }).then((data) => {
            // We are transforming the data we get from the server to the data we need.
            // The important thing is that we configure data object's structure (key) to match the data we need.
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                };
            });
            setMovies(transformedMovies);
        });
    };

    // We can use the useEffect() hook to execute the fetchMoviesHandler() function when the component is rendered.
    useEffect(() => {
        fetchMoviesHandlerAwait()
    }, [fetchMoviesHandlerAwait]);


    let content = <p>Found no movies !</p>
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>
    }


    return (<React.Fragment>
            <section>
                <button onClick={fetchMoviesHandlerAwait}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>);
}

export default App;
