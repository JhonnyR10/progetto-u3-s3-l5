import { GET_ALBUMS1 } from "../actions";

const initialState = {
  data: [],
};

const albumsReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS1:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer1;
