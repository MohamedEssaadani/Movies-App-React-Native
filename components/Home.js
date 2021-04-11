import React, { useEffect, useState } from "react"
import Search from "./Search"
import FilmList from "./FilmList"
import { getFilmsByText } from "../API/TMDB"
import { View } from "native-base"

function Home({ navigation }) {
  const [filmData, setFilmData] = useState([])

  const displayDetails = (id) => {
    navigation.navigate("FilmDetail", { idFilm: id })
  }

  useEffect(() => {
    fetchFilms("")
  }, [])

  const fetchFilms = (text) => {
    getFilmsByText(text).then((data) => {
      setFilmData(data.results)
    })
  }
  return (
    <View>
      <Search fetchFilms={fetchFilms} />
      <FilmList filmData={filmData} displayDetails={displayDetails} />
    </View>
  )
}

export default Home
