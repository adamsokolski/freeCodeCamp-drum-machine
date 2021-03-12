import React, { Component } from "react";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const audio = e.target.firstElementChild;
    console.log(e.target);
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  }

  render() {
    const { id, drumKey, audio } = this.props;

    return (
      <div id={id} className="drum-pad" onClick={this.handleClick}>
        {drumKey}
        <audio className="clip" id={drumKey} src={audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    );
  }
}
