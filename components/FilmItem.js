import { Card, CardItem, Left, Right } from "native-base"
import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { getImageFromApi } from "../API/TMDB"

function FilmItem({ film }) {
  return (
    <ScrollView>
      <Card>
        <CardItem>
          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.vote_text}>{film.vote_average}</Text>
        </CardItem>
        <CardItem cardBody style={{ justifyContent: "center" }}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.poster_path) }}
          />
        </CardItem>
        <CardItem>
          <Text style={styles.description_text} numberOfLines={6}>
            {film.overview}
          </Text>
        </CardItem>
        <CardItem>
          <Text style={styles.date_text}>{film.release_date}</Text>
        </CardItem>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
    color: "orange",
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    justifyContent: "space-between",
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    fontSize: 14,
    color: "orange",
  },
})

export default FilmItem
