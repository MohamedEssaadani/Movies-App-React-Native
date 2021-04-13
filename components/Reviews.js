import { Text, View } from "native-base"
import React, { useState } from "react"
import { FlatList } from "react-native"
import Review from "./Review"

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      key: "1",
      name: "Es-saadani Mohamed",
      review: "Good Film",
      rating: 3.5,
    },
    {
      key: "2",
      name: "Es-saadani Hicham",
      review: "Bad Film",
      rating: 1,
    },
    {
      key: "3",
      name: "Bentouil Adam",
      review: "Great Film",
      rating: 5,
    },
  ])

  getCollection = (querySnapshot) => {
    const reviewArray = []
    querySnapshot.forEach((res) => {
      const { name, email, mobile } = res.data()
      reviewArray.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
      })
    })
    setReviews(reviewArray)
  }
  return (
    <View>
      <Text style={{ color: "orange", marginLeft: 10, fontWeight: "bold" }}>
        Reviews:{" "}
      </Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Review item={item} />}
      />
    </View>
  )
}

export default Reviews
