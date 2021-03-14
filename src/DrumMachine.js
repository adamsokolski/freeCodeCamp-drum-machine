import React from "react";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

export default function DrumMachine({
  handleClick,
  drumPads,
  currentSound,
  handlePlay,
  shadowDrop,
  animation,
}) {
  const drumList = drumPads.map((e) => (
    <DrumPad
      key={e.id}
      drumKey={e.key}
      id={e.id}
      audio={e.audio}
      handleClick={handleClick}
      handlePlay={handlePlay}
      shadowDrop={shadowDrop}
      currentSound={currentSound}
      animation={animation}
    />
  ));
  return (
    <div id="drum-machine">
      <div id="display">
        {drumList}
        <p>{currentSound}</p>
      </div>
    </div>
  );
}
