const Controlls = () => {
  return (
    <div className="controlls">
      <span className="material-icons" id="loop-btn">
        repeat
      </span>
      <span className="material-icons previous" id="prev-btn">
        fast_rewind
      </span>
      <span className="material-icons play" id="play-pause-btn">
        play_circle_filled{" "}
      </span>
      <span className="material-icons next" id="next-btn">
        fast_rewind{" "}
      </span>
      <span className="material-icons" id="shuffle-btn">
        shuffle
      </span>
    </div>
  );
};

export default Controlls;
