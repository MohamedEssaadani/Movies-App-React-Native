import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  filmListReducer,
  filmDetailReducer,
  filmReviewsReducer,
} from "../reducers/filmReducers"

const reducer = combineReducers({
  filmList: filmListReducer,
  film: filmDetailReducer,
  filmReviews: filmReviewsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
