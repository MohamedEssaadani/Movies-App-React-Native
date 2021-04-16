import React from "react"
import MapView from "react-native-maps"

export default class App extends React.Component {
  state = {
    currentLongitude: 0, //Initial Longitude
    currentLatitude: 0, //Initial Latitude
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        console.log(position)
        //getting the Latitude from the location json
        this.setState({ currentLongitude: position.coords.longitude })
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({ currentLatitude: position.coords.latitude })
        //Setting state Latitude to re re-render the Longitude Text
      }
    )
  }

  render() {
    return (
      <MapView style={{ width: 360, height: 200 }}>
        <MapView.Marker
          coordinate={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
          }}
          title={"Your Place"}
        />
        <MapView.Marker
          coordinate={{
            latitude: 33.59602876922195,
            longitude: -7.668161985123069,
          }}
          title={"Cinéma Megarama"}
        />
      </MapView>
    )
  }
}
