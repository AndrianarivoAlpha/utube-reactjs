export const YTOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '828ae52aa6mshb6e0615fb7df0efp18526ajsncfdc9e0b7714',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const youtubeMp3Options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '828ae52aa6mshb6e0615fb7df0efp18526ajsncfdc9e0b7714',
    'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '828ae52aa6mshb6e0615fb7df0efp18526ajsncfdc9e0b7714',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch( url, options );
  const data = await response.json();
  //console.log(data)

  return data
}