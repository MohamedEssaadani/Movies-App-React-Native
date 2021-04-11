import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { View } from "native-base"

function Rating({ value }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 6 ? "star" : value >= 5.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 7 ? "star" : value >= 6.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 8 ? "star" : value >= 7.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 9 ? "star" : value >= 8.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
      <FontAwesome
        name={value >= 10 ? "star" : value >= 9.5 ? "star-half" : "star-o"}
        size={24}
        color="orange"
      />
    </View>
  )
}

export default Rating
