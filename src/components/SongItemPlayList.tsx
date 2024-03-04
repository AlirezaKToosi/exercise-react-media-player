import { useState } from "react";

interface ISongsPlayList {
  name: string;
  artist: string;
  album: string;
  image: string;
  file: string;
}

interface Props {
  song: ISongsPlayList;
  onSelect: (song: ISongsPlayList) => void;
}

export default function SongItemPlayList({ song, onSelect }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    onSelect(song); 
  };

  return (
    <>
      <section className="play-list" id="playlist-view">
        <article className="song-item">
          <figure>
            <img src={"assets/" + song.image} alt={song.album}></img>
          </figure>
          <div className="song-info">
            <p className="upper-text"> {song.name} </p>
            <p className="lower-text"> {song.artist} </p>
          </div>
          <span
            className="material-icons play"
            style={{ cursor: "pointer" }}
            onClick={handlePlayClick}
          >
            {isPlaying ? "pause_circle" : "play_circle"}
          </span>
        </article>
      </section>
    </>
  );
}
