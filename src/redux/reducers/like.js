import { LIKE_SONG } from "../actions";

const initialState = {
  likedSongs: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };

    default:
      return state;
  }
};

export default likeReducer;
