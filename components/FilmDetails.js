import React from "react"
import { ImagePropTypes } from "react-native"
import { getImageFromApi } from "../API/TMDB"


function FilmDetails() {
  return (
    <ScrollView style={styles.scrollview_container}>
      <Image
        style={styles.image}
        source={{ uri: getImageFromApi(film.backdrop_path) }}
      />
      <Text style={styles.title_text}>{film.title}</Text>
      <TouchableOpacity
        style={styles.favorite_container}
        onPress={() => this._toggleFavorite()}
      >
        {this._displayFavoriteImage()}
      </TouchableOpacity>
      <Text style={styles.description_text}>{film.overview}</Text>
      <Text style={styles.default_text}>
        Sorti le {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
      </Text>
      <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
      <Text style={styles.default_text}>
        Nombre de votes : {film.vote_count}
      </Text>
      <Text style={styles.default_text}>
        Budget : {numeral(film.budget).format("0,0[.]00 $")}
      </Text>
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
}

export default FilmDetails
