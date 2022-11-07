import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ( { searchedMusic } ) =>
{
  //console.log( searchedMusic.filter( item => item.type === "video" ) );

  return (
    <div className='search-result-container'>
      <Typography variant="h6">
        Result of your search :
      </Typography>
      <div className='search-result-details'>
        { searchedMusic && searchedMusic.filter( item => item.type === "video" ).slice( 0, 10 ).map( ( item ) =>
        (
          <Link to={ `/${ item?.video?.videoId }` } key={ item?.video?.videoId } style={ { textDecoration: "none", color: "#000" } }>
            <div className='music-detail'
            >
              <img className='music-thumbnail' src={ item?.video?.thumbnails[ item?.video?.thumbnails.length - 1 ].url } alt="" />
              <Typography><strong>Title : </strong>{ item?.video?.title }</Typography>
              <Typography><strong>Views : </strong>{ new Intl.NumberFormat( 'en-US', { maximumSignificantDigits: 10 } ).format( item?.video?.stats.views ) }</Typography>
              <Typography><strong>Duration : </strong>{ parseInt( item?.video?.lengthSeconds / 60 ) } min { parseInt( item?.video?.lengthSeconds % 60 ) } sec</Typography>
            </div>
          </Link>
        )
        ) }
      </div>
    </div>

  )
}

export default SearchResult