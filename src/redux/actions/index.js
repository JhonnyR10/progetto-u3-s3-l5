export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUMS1 = "GET_ALBUMS1";
export const GET_ALBUMS2 = "GET_ALBUMS2";
export const SET_QUERY = "SET_QUERY ";
export const GET_ALBUMS_SEARCH = "GET_ALBUMS_SEARCH ";
export const SELECT_SONG = "SELECT_SONG";
export const LIKE_SONG = "LIKE_SONG";

export const getAlbumsAction = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let fetchedAlbums = await response.json();
        dispatch({
          type: GET_ALBUMS,
          payload: fetchedAlbums.data,
        });
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAlbumsActionPop = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let fetchedAlbums = await response.json();
        console.log("alal", fetchedAlbums);
        dispatch({
          type: GET_ALBUMS1,
          payload: fetchedAlbums.data,
        });
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAlbumsActionHipHop = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let fetchedAlbums = await response.json();
        dispatch({
          type: GET_ALBUMS2,
          payload: fetchedAlbums.data,
        });
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setQueryAction = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const getAlbumsActionSearch = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let fetchedAlbums = await response.json();
        dispatch({
          type: GET_ALBUMS_SEARCH,
          payload: fetchedAlbums.data,
        });
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectSongAction = (songDetails) => ({
  type: "SELECT_SONG",
  payload: songDetails,
});

export const likeSongAction = (songDetails) => ({
  type: "LIKE_SONG",
  payload: songDetails,
});
