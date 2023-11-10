import { GET_ALBUMS2 } from "../actions";

const initialState = {
  data: [],
};

const albumsReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS2:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer2;
