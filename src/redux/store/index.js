import { configureStore, combineReducers } from "@reduxjs/toolkit";

import albumsReducer from "../reducers/albums";
import albumsReducer1 from "../reducers/pop";
import albumsReducer2 from "../reducers/hiphop";
import queryReducer from "../reducers/query";
import searchReducer from "../reducers/search";
import selectReducer from "../reducers/selected";
import likeReducer from "../reducers/like";

const bigReducer = combineReducers({
  rock: albumsReducer,
  pop: albumsReducer1,
  hiphop: albumsReducer2,
  query: queryReducer,
  search: searchReducer,
  select: selectReducer,
  like: likeReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
