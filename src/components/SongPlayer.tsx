import SongInfoContainer from "./SongInfoContainer";
import SongPlayCover from "./SongPlayCover";
import "../style/SongItemPlayList.css";
import TimeLineContainer from "./TimeLineContainer";
import Controlls from "./Controlls";

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
const SongPlayer = ({ song }: Props) => {
  return (
    <div className="song">
      <SongPlayCover song={song} />
      <SongInfoContainer song={song} />
      <TimeLineContainer />
      <Controlls />
    </div>
  );
};

export default SongPlayer;
