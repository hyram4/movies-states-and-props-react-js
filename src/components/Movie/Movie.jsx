import React from 'react';
function Movie (props){
    return(
        <div>
            <ul>
                {props.movies.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            {movie.name}
                            <br></br>
                            {movie.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Movie;