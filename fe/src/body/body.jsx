import React from 'react';
import './body.css';
import { FaList, FaSearch } from 'react-icons/fa';
import MovieComponent from '../movieComponent/movieComponent';
import datas from '../data';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate();

    const handleMovieClick = (movie) => {
        navigate(`/movie/${movie.id}`); // Điều hướng đến trang chi tiết phim
    };

    return (
        <div>
            <div className='container'>
                <div className='navbar'>
                    <FaList />
                    <div className='MovieUI'>
                        MOVIE <span className='icon-circle'>UI</span>
                    </div>
                    <FaSearch />
                </div>
                <hr className='divider' />
                <div className='content'>
                    <h2>Most Popular Movies</h2>
                    <div className='movies-list'>
                        {datas.map((movie) => (
                            <MovieComponent
                                key={movie.id}
                                movie={movie}
                                onClick={() => handleMovieClick(movie)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;