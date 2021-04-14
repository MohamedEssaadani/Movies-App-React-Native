import { Text, View } from "native-base"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { filmReviews } from "../actions/filmActions"
import Review from "./Review"

function Reviews() {
  const dispatch = useDispatch()

  const { loading, error, reviews } = useSelector((state) => state.filmReviews)

  useEffect(() => {
    dispatch(filmReviews())
  }, [])

  return loading ? (
    <ActivityIndicator />
  ) : filmReviews ? (
    <View>
      <Text style={{ color: "orange", marginLeft: 10, fontWeight: "bold" }}>
        Reviews:{" "}
      </Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Review item={item} />}
      />
    </View>
  ) : (
    <Text>{error}</Text>
  )
}

export default Reviews
