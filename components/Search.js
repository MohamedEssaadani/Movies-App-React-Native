import React, { useState } from "react"
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

function Search({ fetchFilms }) {
  const [searchText, setSearchText] = useState("")

  const handleSearch = () => {
    console.log(searchText)
    fetchFilms(searchText)
  }
  return (
    <View style={{ marginTop: 50 }}>
      <TextInput
        style={styles.textinput}
        placeholder="Film Title"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={styles.searchtouchable} onPress={handleSearch}>
        <Text style={{ color: "#fff" }}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  textinput: {
    margin: 5,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  searchtouchable: {
    padding: 10,
    margin: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
})
