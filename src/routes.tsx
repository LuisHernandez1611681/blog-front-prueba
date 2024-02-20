import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewArticle from './views/NewArticle.tsx';
import Home from './views/Home.tsx';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-article" element={<NewArticle />} />
    </Routes>
  );
};

export default RoutesComponent;
