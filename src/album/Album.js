import { useEffect, useContext } from "react";

import Photos from "./Photos";
import { context } from "../reducer/reducer";
import "./styles.css";

export default function Album() {
  const handleChange = (event) => {
    const { value } = event.target;
    actions.setAlbumId(value);
  };

  const { state, actions } = useContext(context);

  useEffect(() => {
    async function fetchPhotos() {
      const fetchReq = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await fetchReq.json();
      actions.setPhotos(data);
    }

    async function fetchAlbums() {
      const fetchReq = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await fetchReq.json();
      console.log(data)
      actions.setAlbums(data);
    }

    fetchPhotos();
    fetchAlbums();
    return () => {};
  }, []);

  const pics = state?.photos?.filter(pic=> pic.albumId == state.albumId) ||[];

  return (
    <div className="wrapper">
      <div className="select-wrapper">
        <select className="select" onChange={handleChange}>
          <option value="0">Select Album</option>
          {state?.albums?.map((al) => (
            <option key={al.id} value={al.id}>
              {al.title}
            </option>
          ))}
        </select>
      </div>

      <div className="album-wrapper">
        {pics?.map((ph) => (
          <Photos key={ph.id} photo={ph} />
        ))}
      </div>
    </div>
  );
}
