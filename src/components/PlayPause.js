import React, { Component } from 'react'
import '../css/PlayPause.css'
export class PlayPause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            played: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSeekChange = this.handleSeekChange.bind(this);
        this.handleSeekMouseDown = this.handleSeekMouseDown.bind(this);
        this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this);
        this.selectLocal = this.selectLocal.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.getDuration = this.getDuration.bind(this);
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.updateDuration = setInterval(
            () => this.tick(),
            200
        )
    }
    componentWillUnmount() {
        clearInterval(this.updateDuration)
    }
    tick() {
        // re-render by updating state
        if (!this.state.seeking)
            this.setState({})
    }
    handleChange(e) {
        const filePath = URL.createObjectURL(e.target.files[0]);
        const playFile = new Audio(filePath);
        this.setState({ player: playFile });
    }
    handleSeekChange(e) {
        // this.state.player.played = parseFloat(e.target.value)
        this.setState({ played: parseFloat(e.target.value) })
    }
    handleSeekMouseDown() {
        // this.setState({ seeking: true })
    }
    handleSeekMouseUp(e) {
        if (this.state.player !== null) {
            let duration = this.getDuration()
            this.state.player.currentTime = parseFloat(e.target.value) * duration
            // this.setState({ seeking: false })
        }
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
        input.accept = "audio/*"; //when the file explorer opens, only allow the user to select files with this extension
        input.onchange = e => {
            this.handleChange(e);
        }
        input.click();
    }
    getCurrentTime() {
        let duration = this.getDuration()
        if (this.state.player !== '' && duration > 0)
            return this.state.player.currentTime
        else
            return 0
    }
    getDuration() {
        if (this.state.player === '')
            return 0
        const { duration, seekable } = this.state.player
        if (duration === Infinity && seekable.length > 0)
            return seekable.end(seekable.length - 1)
        return duration
    }
    // render buttons
    render() {
        let duration = this.getDuration()
        let elapsed = this.getCurrentTime()
        const { played } = this.state
        return (
            <div>
                <button className="button button1" onClick={this.play}>Play</button>  {/* Buttons to play and pause songs */}
                <button className="button button2" onClick={this.pause}>Pause</button>
                <button className="button button3" onClick={this.selectLocal}>Select Local File</button>
                <table>
                    <tbody>
                        <tr>
                            <th>elapsed</th>
                            <td>{elapsed.toFixed(0)} s</td>
                        </tr>
                        <tr>
                            <th>duration</th>
                            <td>{duration > 0 ? duration.toFixed(0) : 0} s</td>
                        </tr>
                        <tr>
                            <th>Seek</th>
                            <td>
                                <input
                                    type='range' min={0} max={0.999999} step='any'
                                    value={played}
                                    onMouseDown={this.handleSeekMouseDown}
                                    onMouseUp={this.handleSeekMouseUp}
                                    onChange={this.handleSeekChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
