import React, { useState } from 'react';
import { fetchData, youtubeOptions } from '../utils/fetchDataFunction';
import SearchResult from '../components/SearchResult';

import { RotatingTriangles } from 'react-loader-spinner'



const SearchPage = () =>
{
  const [ musicTitle, setMusicTitle ] = useState( "" )
  const [ searchedMusic, setSearchedMusic ] = useState( [] )
  const [ isSearchFinish, setIsSearchFinish ] = useState( false )

  const [ isLoading, setIsLoading ] = useState( false )

  //console.log( searchedMusic );

  const handleSearchMusic = async ( e ) =>
  {
    setIsLoading( true )
    encodeURIComponent( musicTitle )

    const url = `https://youtube138.p.rapidapi.com/search/?q=${ encodeURIComponent( musicTitle ) }&hl=fr`;
    const data = await fetchData( url, youtubeOptions );

    //console.log( data.contents );

    if ( data )
    {
      setSearchedMusic( [ ...data.contents ] )
      setIsSearchFinish( true )

      setMusicTitle( '' )
      setIsLoading( false )
    }

  }

  return (
    <>
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
            placeholder="Type your search here..."
            autoFocus
            onChange={ ( e ) => setMusicTitle( e.target.value ) }
            value={ musicTitle }
          />
        </form>
        <button onClick={ () => handleSearchMusic() } >SEARCH</button>
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