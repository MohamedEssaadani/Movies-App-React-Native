import React, { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Search from "./components/Search"
import FilmList from "./components/FilmList"
import { getFilmsByText } from "./API/TMDB"

export default function App() {
  const [filmData, setFilmData] = useState([])

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
      <FilmList filmData={filmData} />
    </View>
  )
}

const styles = StyleSheet.create({})
