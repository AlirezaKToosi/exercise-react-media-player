interface ISongsPlayList {
  name: string;
  artist: string;
  album: string;
  image: string;
  file: string;
}
interface Props {
  song: ISongsPlayList;
}
const SongPlayCover = ({ song }: Props) => {
  return (
    <figure className="album-image-container">
      <img src={"assets/" + song.image} alt={song.album}></img>
    </figure>
  );
};

export default SongPlayCover;
