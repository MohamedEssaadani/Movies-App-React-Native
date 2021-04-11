import React from "react"
import { StyleSheet, Image } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import FilmDetail from "../components/FilmDetails"
import Home from "../components/Home"

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // navigationOptions: {
    //   title: "Home ",
    // },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
})

// const FavoritesStackNavigator = createStackNavigator({
//   Favorites: {
//     screen: Favorites,
//     navigationOptions: {
//       title: "Favoris",
//     },
//   },
//   FilmDetail: {
//     screen: FilmDetail,
//   },
// })

// const NewsStackNavigator = createStackNavigator({
//   News: {
//     screen: News,
//     navigationOptions: {
//       title: "Les Derniers Films",
//     },
//   },
//   FilmDetail: {
//     screen: FilmDetail,
//   },
// })

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require("../Images/ic_search.png")}
              style={styles.icon}
            />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#DDDDDD",
      inactiveBackgroundColor: "#FFFFFF",
      showLabel: false,
      showIcon: true,
    },
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default createAppContainer(MoviesTabNavigator)
