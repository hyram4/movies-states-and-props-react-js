import React,{useState} from 'react';
import {Movies} from '../Movies/Movies'
import Movie from '../Movie/Movie';
export default function MovieList(){
    const[movies,setMovies]=useState(Movies)
    console.log(movies)
    return(
        <div className="container">
            <h1>Movies</h1>
            <Movie movies={movies}/>
        </div>
    );
}