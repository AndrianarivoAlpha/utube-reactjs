import React, { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FireWorks } from '../utils/FireWorks';

const DownloadButton = ({ title, audioLink, videoLink }) => {
  const [runFirework, setRunFirework] = useState(false);

  const handleDownload = () => {
    setRunFirework(true);
  }
  return (
    <div className='download-button-container'>
      <a
        href={audioLink}
        download={title}
        onClick={() => handleDownload()}
        target="_blank"
        rel="noreferrer"
      >
        <button className='btn-download audio-download'>
          {title}.mp3 <AiOutlineDownload style={{ fontSize: "20pt" }} />
        </button>
      </a>
      {
        videoLink && (
          <a
            href={videoLink}
            download={title}
            onClick={() => handleDownload()}
          >
            <button className='btn-download video-download'>
              {title}.mp4 <AiOutlineDownload style={{ fontSize: "20pt" }} />
            </button>
          </a>
        )
      }

      {runFirework && <FireWorks />}
    </div>
  )
}

export default DownloadButton