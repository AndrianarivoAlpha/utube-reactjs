import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, youtubeOptions, youtubeMp3Options, YTOptions } from '../utils/fetchDataFunction';

import DownloadButton from '../components/DownloadButton';
import { RotatingTriangles } from 'react-loader-spinner'
import Header from '../components/Header';

const DownloadDetail = () =>
{
  const { id } = useParams();
  
  const [ isFetched, setIsFetched ] = useState( false );
  const [ imageUrl, setImageUrl ] = useState( '' );
  const [ title, setTitle ] = useState( '' );
  const [ duration, setDuration ] = useState( '' );

  const [ audioLink, setAudioLink ] = useState( '' );
  const [videoLink, setVideoLink] = useState('');

  const fetchMusicByID = async () =>
  {
    const detailsVideoUrl = `https://youtube138.p.rapidapi.com/video/details/?id=${ id }&hl=fr`
    const detailsVideoData = await fetchData( detailsVideoUrl, youtubeOptions );

    //console.log(detailsVideoData);

    const mp3Url = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${ id }`;
    const mp3Data = await fetchData( mp3Url, youtubeMp3Options );

    //console.log(mp3Data.link)

    const mp4Url = `https://yt-api.p.rapidapi.com/dl?id=${ id }`;
    const mp4Data = await fetchData( mp4Url, YTOptions );
    
    //console.log(mp4Data);

    if ( detailsVideoData )
    {
      const { lengthSeconds, title } = detailsVideoData;

      setImageUrl( mp4Data.thumbnail[ mp4Data.thumbnail.length - 1 ].url );
      setDuration( lengthSeconds );

      let mp4 = mp4Data && mp4Data.formats.filter((video) => video.height >= 240 );
      let mp3 = mp3Data.link;

      //console.log(mp4)

      setTitle( title );
      setAudioLink( mp3 );
      setVideoLink( mp4[mp4.length - 1].url );

      setIsFetched( true );
    }
    
  }
  useEffect( () =>
  {
    fetchMusicByID()
  } )

  //console.log( imageUrl );
  
  return (
    <>
      {!isFetched && <Header />}
      <div className='download-detail-container'>
        {
          isFetched ? (
            <div>
              <div className='donwload-detail'>
                <img src={imageUrl} alt="" className='donwload-image-thumbnail' />
                <Typography>
                  <strong>Title :</strong> {title}
                </Typography>
                <Typography>
                  <strong>Duration :</strong> {parseInt(duration / 60)} <small>min</small>  : {parseInt(duration % 60)} <small>sec</small>
                </Typography>
              </div>
              <div>
                <DownloadButton title={title} audioLink={audioLink} videoLink={videoLink} />
              </div>
            </div>

          ) :
            (
              <div>
                <RotatingTriangles
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="rotating-triangels-loading"
                  wrapperClass="rotating-triangels-wrapper"
                />
                <h4>LOADING...</h4>
              </div>
            )
        }
      </div>
    </>
    
  )
}

export default DownloadDetail