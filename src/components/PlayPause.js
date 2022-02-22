import React, { Component } from 'react'
import '../css/PlayPause.css'
export class PlayPause extends Component {
    constructor(props) {
        super(props);
        this.state = { player: '' };
        this.handleChange = this.handleChange.bind(this);
        this.selectLocal = this.selectLocal.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    handleChange(e) {
        const filePath = URL.createObjectURL(e.target.files[0]);
        const playFile = new Audio(filePath);
        this.setState({ player: playFile });
    }
    // function to play audio saved on computer
    play() {
        this.state.player.play();
    }
    // function to pause
    pause() {
        this.state.player.pause();
    }
    //function to open file explorer and select audio file
    selectLocal() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept ="audio/*"; //when the file explorer opens, only allow the user to select files with this extension
        input.onchange = e => {
            this.handleChange(e);
        }
        input.click();
    }
    // render buttons
    render() {
        return (
            <div>
                <button className="button button1" onClick={this.play}>Play</button>  {/* Buttons to play and pause songs */}
                <button className="button button2" onClick={this.pause}>Pause</button>
                <button className="button button3" onClick={this.selectLocal}>Select Local File</button>
            </div>
        )
    }
}
