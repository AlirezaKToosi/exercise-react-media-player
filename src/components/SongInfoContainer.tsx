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
const SongInfoContainer = ({ song }: Props) => {
    
    return (  
        <div className="song-info-container">
        <span className="add material-icons"> add_circle_outline </span>
        <div className="song-info">
          <p className="upper-text"> {song.name} </p>
          <p className="lower-text"> {song.artist} </p>
        </div>
        <span className="heart material-icons"> favorite </span>
        </div>
    );
}
 
export default SongInfoContainer;