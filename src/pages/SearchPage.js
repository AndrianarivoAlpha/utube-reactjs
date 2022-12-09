import React, { useState } from 'react';
import { fetchData, youtubeOptions } from '../utils/fetchDataFunction';
import SearchResult from '../components/SearchResult';

import { RotatingTriangles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



const SearchPage = () =>
{
  const navigate = useNavigate()

  const [ musicTitle, setMusicTitle ] = useState( "" )
  const [ searchedMusic, setSearchedMusic ] = useState( [] )
  const [isSearchFinish, setIsSearchFinish] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const showBtn = musicTitle !== "" ? true : false
  const btnText = musicTitle.includes('/watch?v=') || musicTitle.includes('youtu.be/') ? "CONVERT" : "SEARCH"

  //console.log( searchedMusic );

  const handleSearchMusic = async ( e ) =>
  {
    if (musicTitle.includes('/watch?v=')) {
      const splitedMusicID = musicTitle.split('=');
      const musicID = splitedMusicID[splitedMusicID.length - 1]

      navigate(`/${musicID}`)
    } else if (musicTitle.includes('youtu.be/')) {
      const splitedMusicID = musicTitle.split('/');
      const musicID = splitedMusicID[splitedMusicID.length - 1]

      navigate(`/${musicID}`)
    } else {
      setIsLoading(true)
      encodeURIComponent(musicTitle)

      const url = `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(musicTitle)}&hl=fr`;
      const data = await fetchData(url, youtubeOptions);

      //console.log( data.contents );

      if (data) {
        setSearchedMusic([...data.contents])
        setIsSearchFinish(true)

        setMusicTitle('')
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      {!isSearchFinish && <Header />}
      <div className='search-bar-container'>
        <form onSubmit={ ( e ) =>
        {
          handleSearchMusic();
          e.preventDefault();
        } }>
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search or paste Youtube url here..."
            autoFocus
            onChange={(e) => {
              setMusicTitle(e.target.value)
            }}
            value={ musicTitle }
          />
        </form>
        {
          showBtn && <button onClick={() => handleSearchMusic()} >{btnText}</button>
        }
      </div>

      {
        isLoading && (
          <div className='loading-container'>
            <RotatingTriangles
              visible={ true }
              height="80"
              width="80"
              ariaLabel="rotating-triangels-loading"
              wrapperStyle={ {} }
              wrapperClass="rotating-triangels-wrapper"
            />
            <h4>LOADING...</h4>
          </div> )
      }
      { isSearchFinish && <SearchResult searchedMusic={ searchedMusic } /> }
    </>
  )
}

export default SearchPage