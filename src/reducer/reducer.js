import { createContext, useReducer } from "react";

const actions = {
  SET_ALBUM_ID: "SET_ALBUM_ID",
  SET_ALBUMS: "SET_ALBUMS",
  SET_PHOTOS: "SET_PHOTOS",
};

const useActions = (dispatch) => {
  const setAlbumId = (albumId) => {
    dispatch({ type: actions.SET_ALBUM_ID, albumId });
  };

  const setAlbums = (albums) => {
    dispatch({ type: actions.SET_ALBUMS, albums });
  };

  const setPhotos = (photos) => {
    dispatch({ type: actions.SET_PHOTOS, photos });
  };

  return {
    setAlbumId,
    setAlbums,
    setPhotos,
  };
};

function albumReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_ALBUM_ID: {
      return { ...state, albumId: action.albumId };
    }

    case actions.SET_ALBUMS: {
      return { ...state, albums: action.albums };
    }
    case actions.SET_PHOTOS: {
      return { ...state, photos: action.photos };
    }

    default: {
      return state;
    }
  }
}

const context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(albumReducer, {});
  const actions = useActions(dispatch);
  return (
    <context.Provider value={{ state, actions }}>{children}</context.Provider>
  );
};

export { Provider, context };
