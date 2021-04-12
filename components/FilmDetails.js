import React, { useState, useEffect } from "react"
import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native"
import { getImageFromApi, getFilmDetailFromApi } from "../API/TMDB"
import { filmDetail } from "../actions/filmActions"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import { Text } from "native-base"

export default function FilmDetails({ navigation }) {
  //const [film, setFilm] = useState({})
  const dispatch = useDispatch()
  const [filmData, setFilmData] = useState([])
  const { loading, error, film } = useSelector((state) => state.film)

  useEffect(() => {
    dispatch(filmDetail(navigation.state.params.idFilm))
  }, [navigation.state.params.idFilm])

  // const displayFavoriteImage = () => {
  //   var sourceImage = require("../Images/ic_favorite_border.png")
  //   var shouldEnlarge = false // Par défaut, si le film n'est pas en favoris, on veut qu'au clic sur le bouton, celui-ci s'agrandisse => shouldEnlarge à true
  //   if (
  //     this.props.favoritesFilm.findIndex(
  //       (item) => item.id === this.state.film.id
  //     ) !== -1
  //   ) {
  //     sourceImage = require("../Images/ic_favorite.png")
  //     shouldEnlarge = true // Si le film est dans les favoris, on veut qu'au clic sur le bouton, celui-ci se rétrécisse => shouldEnlarge à false
  //   }
  //   return (
  //     <EnlargeShrink shouldEnlarge={shouldEnlarge}>
  //       <Image style={styles.favorite_image} source={sourceImage} />
  //     </EnlargeShrink>
  //   )
  // }

  if (film != undefined) {
    return (
      <ScrollView style={styles.scrollview_container}>
        <Image
          style={styles.image}
          source={{ uri: getImageFromApi(film.backdrop_path) }}
        />
        <Text style={styles.title_text}>{film.title}</Text>
        <Text style={styles.description_text}>{film.overview}</Text>
        <Text style={styles.default_text}>
          Sorti le {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
        <Text style={styles.default_text}>
          Nombre de votes : {film.vote_count}
        </Text>
        <Text style={styles.default_text}>Budget : ${film.budget}</Text>
        <Text style={styles.default_text}>
          Genre(s) :{" "}
          {film.genres
            .map(function (genre) {
              return genre.name
            })
            .join(" / ")}
        </Text>
        <Text style={styles.default_text}>
          Companie(s) :{" "}
          {film.production_companies
            .map(function (company) {
              return company.name
            })
            .join(" / ")}
        </Text>
      </ScrollView>
    )
  } else {
    return <Text>ERRORRRR!</Text>
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 25,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "orange",
    textAlign: "center",
  },
  favorite_container: {
    alignItems: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: "purple",
  },
  favorite_image: {
    flex: 1,
    width: null,
    height: null,
  },
  share_touchable_floatingactionbutton: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: "#e91e63",
    justifyContent: "center",
    alignItems: "center",
  },
  share_touchable_headerrightbutton: {
    marginRight: 8,
  },
  share_image: {
    width: 30,
    height: 30,
  },
})
