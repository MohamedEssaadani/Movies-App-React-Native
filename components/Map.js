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
        //getting the Latitude from the location json
        this.setState({ currentLongitude: position.coords.longitude })
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({ currentLatitude: position.coords.latitude })
        //Setting state Latitude to re re-render the Longitude Text
      }
    )
    this.watchID = navigator.geolocation.watchPosition((position) => {
      //Will give you the location on location change
      console.log(position)

      //getting the Latitude from the location json
      this.setState({ currentLongitude: position.coords.longitude })
      //Setting state Longitude to re re-render the Longitude Text
      this.setState({ currentLatitude: position.coords.latitude })
      //Setting state Latitude to re re-render the Longitude Text
    })
  }

  render() {
    return (
      <MapView style={{ width: 360, height: 200 }}>
        <MapView.Marker
          coordinate={{
            latitude: this.state.currentLongitude,
            longitude: this.state.currentLatitude,
          }}
          title={"Morocco"}
        />
        <MapView.Marker
          coordinate={{ latitude: 27.73538, longitude: -180.4324 }}
          title={"USA"}
        />
      </MapView>
    )
  }
}
