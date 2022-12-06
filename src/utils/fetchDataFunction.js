export const YTOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_YT_HOST
  }
};

export const youtubeMp3Options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_YTMP3_HOST
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_YT138_HOST
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch( url, options );
  const data = await response.json();
  //console.log(data)

  return data
}