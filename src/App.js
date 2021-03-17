import "./App.css";
import soundsArr from "./sounds";

import DrumMachine from "./DrumMachine";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: "",
      drumPads: [
        { key: "Q", id: "Kick", audio: soundsArr[0] },
        { key: "W", id: "Snare Top", audio: soundsArr[1] },
        { key: "E", id: "Rack Tom", audio: soundsArr[2] },
        { key: "A", id: "Floor Tom", audio: soundsArr[3] },
        { key: "S", id: "High Hat", audio: soundsArr[4] },
        { key: "D", id: "High Hat Loose", audio: soundsArr[5] },
        { key: "Z", id: "20 Inch Crash", audio: soundsArr[6] },
        { key: "X", id: "22 Inch Crash", audio: soundsArr[7] },
        { key: "C", id: "Frame Drum", audio: soundsArr[8] },
      ],
      playing: {
        Q: false,
        W: false,
        E: false,
        A: false,
        S: false,
        D: false,
        Z: false,
        X: false,
        C: false,
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.render = this.render.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      this.handleKeyPress(event);
    });
    document.addEventListener("keyup", (event) => {
      this.handleKeyUp(event);
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", (event) => {
      this.handleKeyPress(event);
    });
    document.removeEventListener("keyup", (event) => {
      this.handleKeyUp(event);
    });
  }

  // keyboard click
  handleKeyPress(event) {
    let arr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if (arr.indexOf(event.key.toUpperCase()) !== -1) {
      const key = event.key.toUpperCase();
      // Change name of current sound
      this.setState({
        currentSound: this.findDrumName(key),
      });

      // start playing audio or reset and start playing
      let audio = document.querySelector(`#${key}`);
      if (audio.paused) {
        audio.play();
      } else {
        audio.currentTime = 0;
        audio.play();
      }

      let state = Object.assign({}, this.state.playing);
      state[key] = true;
      this.setState({
        playing: state,
      });
    }
  }

  // Remove playing class if key is up
  handleKeyUp(event) {
    let arr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if (arr.indexOf(event.key.toUpperCase()) !== -1) {
      const key = event.key.toUpperCase();

      let state = Object.assign({}, this.state.playing);
      state[key] = false;
      this.setState({
        playing: state,
      });
    }
  }

  // Mouse click
  handleClick(e) {
    if (e.target.className === "drum-pad") {
      const key = e.target.children[0].innerText;
      const audio = e.target.children[1];

      // Change name of current sound
      this.setState({
        currentSound: this.findDrumName(key),
      });

      // start playing audio or reset and start playing
      if (audio.paused) {
        audio.play();
      } else {
        audio.currentTime = 0;
        audio.play();
      }
    }
  }

  findDrumName(key) {
    let arr = this.state.drumPads;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        return arr[i].id;
      }
    }
  }

  render() {
    const { currentSound, drumPads, playing } = this.state;
    return (
      <div className="App">
        <DrumMachine
          handleClick={this.handleClick}
          currentSound={currentSound}
          drumPads={drumPads}
          playing={playing}
        />
      </div>
    );
  }
}
