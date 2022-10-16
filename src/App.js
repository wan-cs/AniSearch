import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import SingleView from './pages/SingleView';
import MainNavigation from './components/MainNavigation';
import { SearchContext } from './context/search';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data);
  }

  const setSingle = (data) => {
    setSingleData(data);
  }

  const search = (searchTerm) => {
    // TODO: upgrade to jikan v4 by October 2022
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=20&sfw`
    ).then(response => response.json());
  }

  return (
    <SearchContext.Provider value={{ search, animeData, setData, singleData, setSingle }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/single-view" element={<SingleView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
