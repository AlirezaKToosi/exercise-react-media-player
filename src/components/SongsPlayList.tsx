import SongItemPlayList from './SongItemPlayList';
import '../style/SongItemPlayList.css'

export default function SongsPlayList(){
    
    interface ISongsPlayList {
        name: string;
        artist: string;
        album: string;
        image: string;
        file: string;
    }

    const songObjects:ISongsPlayList[] = [
        {
          name: "Say_Goodbye",
          artist: "VITNE",
          album: "Jupiter",
          image: "Say_Goodbye_-_VITNE.jpg",
          file: "Say_Goodbye_-_VITNE.mp3",
        },
        {
          name: "Peyote",
          artist: "Kinematic",
          album: "kites",
          image: "Peyote_-_Kinematic.jpg",
          file: "Peyote_-_Kinematic.mp3",
        },
        {
          name: "Old_News",
          artist: "Hot_Fiction",
          album: "Apply within",
          image: "Old_News_-_Hot_Fiction.jpg",
          file: "Old_News_-_Hot_Fiction.mp3",
        },
        {
          name: "Not_My_Problem",
          artist: "All_My_Friends_Hate_Me",
          album: "kites",
          image: "Not_My_Problem_-_All_My_Friends_Hate_Me.jpg",
          file: "Not_My_Problem_-_All_My_Friends_Hate_Me.mp3",
        },
        {
          name: "Higher_And_Higher",
          artist: "Inception",
          album: "kites",
          image: "Higher_And_Higher_-_Scream_Inc._(3).jpg",
          file: "Higher_And_Higher_-_Scream_Inc._(3).mp3",
        },
        {
          name: "Boys,_Girls,_Toys_&_Words",
          artist: "Modern_Pitch",
          album: "Eye of the storm",
          image: "Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg",
          file: "Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3",
        },
      ];

    return (
        <>
            <div className="songs-container">
                {
                    songObjects.map((song) => <SongItemPlayList name={song.name} artist={song.artist} album={song.album} image={song.image} file={song.file} />)
                }
            </div>
        </>
    );
}

