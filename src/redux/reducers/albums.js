import { GET_ALBUMS } from "../actions";

const initialState = {
  data: [],
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer;
