import React from "react";
import DrumPad from "./DrumPad";
import soundsArr from "./sounds";
import "./DrumMachine.css";

export default function DrumMachine() {
  const drumPads = [
    { key: "Q", id: "Kick", audio: soundsArr[0] },
    { key: "W", id: "Snare TOp", audio: soundsArr[1] },
    { key: "E", id: "Rack Tom", audio: soundsArr[2] },
    { key: "A", id: "Floor Tom", audio: soundsArr[3] },
    { key: "S", id: "High Hat", audio: soundsArr[4] },
    { key: "D", id: "High Hat Loose", audio: soundsArr[5] },
    { key: "Z", id: "20 Inch Crash", audio: soundsArr[6] },
    { key: "X", id: "22 Inch Crash", audio: soundsArr[7] },
    { key: "C", id: "Frame Drum", audio: soundsArr[8] },
  ];
  const drumList = drumPads.map((e) => (
    <DrumPad key={e.id} drumKey={e.key} id={e.id} audio={e.audio} />
  ));
  return (
    <div id="drum-machine">
      <div id="display">{drumList}</div>
    </div>
  );
}
