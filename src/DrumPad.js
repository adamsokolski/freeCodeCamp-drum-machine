import React from "react";
import "./shadowDrop.css";

export default function DrumPad({ id, drumKey, audio, handleClick }) {
  return (
    // Add here animations with react spring
    <div id={id} className="drum-pad" onClick={handleClick}>
      <p>{drumKey}</p>
      <audio className="clip" id={drumKey} src={audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}
