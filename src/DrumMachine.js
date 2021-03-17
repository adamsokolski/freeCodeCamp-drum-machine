import React from "react";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

export default function DrumMachine({
  handleClick,
  drumPads,
  currentSound,
  playing,
}) {
  const drumList = drumPads.map((e) => (
    <DrumPad
      key={e.id}
      drumKey={e.key}
      id={e.id}
      audio={e.audio}
      handleClick={handleClick}
      currentSound={currentSound}
      playing={playing[e.key]}
    />
  ));
  return (
    <div id="drum-machine">
      <div id="display">
        {drumList}
        <div className="current-sound">{currentSound}</div>
      </div>
    </div>
  );
}
