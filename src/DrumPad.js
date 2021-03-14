import React from "react";
import "./shadowDrop.css";

export default function DrumPad({
  id,
  drumKey,
  audio,
  handleClick,
  handlePlay,
  shadowDrop,
  currentSound,
  animation,
}) {
  return (
    <div
      id={id}
      className={`drum-pad ${animation[drumKey] ? "shadow-drop-center" : ""}`}
      onClick={handleClick}
    >
      <p>{drumKey}</p>
      <audio className="clip" id={drumKey} src={audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}
