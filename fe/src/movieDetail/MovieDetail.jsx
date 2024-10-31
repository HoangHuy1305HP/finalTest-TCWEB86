import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../data';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams(); // Lấy id phim từ URL
    const navigate = useNavigate();
    const movie = datas.find(movie => movie.id === id); // Tìm phim theo id

    if (!movie) return <div>Movie not found!</div>;

    return (
        <div className='popup'>
            <div className='popup-content'>
                <button className='close-button' onClick={() => navigate('/')}>X</button>
                <div className='popup-left'>
                    <img src={movie.image} alt={movie.movieName} />
                </div>
                <div className='popup-right'>
                    <h2>{movie.movieName}</h2>
                    <p>{movie.movieTime}</p>
                    <p>Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?</p>
                    <button className='play-button'>▶ PLAY MOVIE</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
