export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'cbbcefd4cfmsh79ce2947f4c9de4p17d3e4jsnad727ff06d7f'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'cbbcefd4cfmsh79ce2947f4c9de4p17d3e4jsnad727ff06d7f'
  }
};

export const fetchData = async (url, options) => {

    const response = await fetch (url, options);
    const data = await response.json();

    return data;

}