import "../style/SongItemPlayList.css";

interface ISongItemPlayList {
  name: string;
  artist: string;
  album: string;
  image: string;
  file: string;
}

export default function SongItemPlayList(props: ISongItemPlayList) {
  return (
    <>
      <section className="play-list" id="playlist-view">
        <article className="song-item">
          <figure>
            <img src={"assets/" + props.image} alt={props.album}></img>
          </figure>
          <div className="song-info">
            <p className="upper-text"> {props.name} </p>
            <p className="lower-text"> {props.artist} </p>
          </div>
          <span className="material-icons play" style={{cursor:"pointer"}}> play_circle </span>
        </article>
      </section>
    </>
  );
}
