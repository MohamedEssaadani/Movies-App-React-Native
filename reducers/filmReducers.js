import {
  FILM_LIST_FAIL,
  FILM_LIST_REQUEST,
  FILM_LIST_SUCCESS,
} from "../constants/filmConstants"

const filmListReducer = (state, action) => {
  switch (action.type) {
    case FILM_LIST_REQUEST: {
      return {
        loading: true,
      }
    }
    case FILM_LIST_SUCCESS: {
      return {
        loading: true,
        films: action.payload,
      }
    }
    case FILM_LIST_FAIL: {
      return {
        loading: true,
        error: action.payload,
      }
    }
    default: {
      return {}
    }
  }
}

export { filmListReducer }
