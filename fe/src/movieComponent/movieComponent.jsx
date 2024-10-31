import React from 'react';
import './movieComponent.css';

const MovieComponent = ({ movie, onClick }) => {
    return (
        <div className='movies-item' onClick={onClick}>
            <img src={movie.image} alt={movie.movieName} />
            <div className='movies-title'>{movie.movieName}</div>
            <div className='movies-time'>{movie.movieTime}</div>
        </div>
    );
}

export default MovieComponent;