import React from 'react';

import { Routes, Route } from 'react-router-dom';
import DownloadDetail from './pages/DownloadDetail';

import Header from './components/Header';
import Logo from './components/Logo';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

const App = () =>
{
  return (
    <>
      <Logo />
      <Header />
      <Routes>
        <Route exact path='/' element={ <SearchPage /> } />
        <Route exact path='/:id' element={ <DownloadDetail /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App