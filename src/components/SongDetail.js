import React from "react";
import { connect, ReactReduxContext } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a son</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);


const Counter = (props) => {
Current Count : <span>{props.count}</span>
<button onClick={props.increment} className="increment"
<button onClick={props.decrement} className="increment"


const mapStateToProps = (state) => {
  return { count: state.count };
};

const WrappedCounter = ReactReduxContext.connect(mapStateToProps, {
  increment,
  decrement
})(Counter);