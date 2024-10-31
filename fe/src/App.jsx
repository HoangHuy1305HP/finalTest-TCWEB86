import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './body/body';
import MovieDetail from './movieDetail/MovieDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
};

export default App;