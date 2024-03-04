const TimeLineContainer = () => {
  return (
    <div className="time-line-container">
      <input type="range" id="progress-bar" value="0" max="100" step="0.1" />
    </div>
  );
};

export default TimeLineContainer;
