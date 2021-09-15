export default function Photos({photo}) {
  return (
    <div className="photo-wrapper">
      <div className="">
        <img className="img" src={photo.thumbnailUrl} alt="thumbnail" />
      </div>
      <div className="caption-wrapper">
        <h2>Photo Id: {photo.id}</h2>
        <p>{photo.title}</p>
      </div>
    </div>
  );
}
