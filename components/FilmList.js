import React, { useState, useEffect } from "react"
import { View, FlatList } from "react-native"
import FilmItem from "./FilmItem"

function FilmList({ filmData, displayDetails }) {
  return (
    <View>
      <FlatList
        data={filmData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FilmItem film={item} displayDetails={displayDetails} />
        )}
      />
    </View>
  )
}

export default FilmList
