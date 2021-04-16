import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  filmListReducer,
  filmDetailReducer,
  filmReviewsReducer,
} from "../reducers/filmReducers"
import toggleFavorite from "../reducers/favoriteReducer"

const reducer = combineReducers({
  filmList: filmListReducer,
  film: filmDetailReducer,
  reviews: filmReviewsReducer,
  favorites: toggleFavorite,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
