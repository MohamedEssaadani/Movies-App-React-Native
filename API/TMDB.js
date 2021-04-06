const API_TOKEN = "07a6007c9bbe5527dd7b5b3505d6ac8d"

function getFilmsByText(text) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err))
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name
}

export { getFilmsByText }
