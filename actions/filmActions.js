import axios from "axios"
import {
  FILM_DETAIL_FAIL,
  FILM_DETAIL_REQUEST,
  FILM_DETAIL_SUCCESS,
  FILM_LIST_FAIL,
  FILM_LIST_REQUEST,
  FILM_LIST_SUCCESS,
} from "../constants/filmConstants"

const API_TOKEN = "07a6007c9bbe5527dd7b5b3505d6ac8d"

export const filmList = (text) => async (dispatch) => {
  try {
    dispatch({ type: FILM_LIST_REQUEST })

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`

    const { data } = await axios.get(url)

    dispatch({ type: FILM_LIST_SUCCESS, payload: data.results })
  } catch (error) {
    dispatch({ type: FILM_LIST_FAIL, payload: error })
  }
}

export const filmDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: FILM_DETAIL_REQUEST })

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`

    const { data } = await axios.get(url)

    dispatch({ type: FILM_DETAIL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FILM_DETAIL_FAIL, payload: error })
  }
}
