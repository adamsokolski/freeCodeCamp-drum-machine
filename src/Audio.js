import React from "react";

export default function Audio({ drumKey, audio }) {
  return (
    <audio className="clip" id={drumKey} src={audio}>
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
}
