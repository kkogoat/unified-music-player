import React, { Component, useState } from 'react'
import '../css/SoundCloud.css'
export class SoundCloud extends Component {
    constructor(props) {
    super(props);
    this.SoundCloudDisplay = this.SoundCloudDisplay.bind(this);
    this.handleChangeInputBoxSoundCloud = this.handleChangeInputBoxSoundCloud.bind(this);
    this.state ={holdString :''};
    }
    //hold url entered in box
    handleChangeInputBoxSoundCloud(event){
    this.setState({holdString : event.target.value});

    }
    SoundCloudDisplay(){
    // This is the format urls are accepted by the widget - "https://w.soundcloud.com/player/?url=https://soundcloud.com/octobersveryown/drake-tsu" ;
    var urlEntered = this.state.holdString;
    document.getElementById('sc-widget').src ="https://w.soundcloud.com/player/?url="+urlEntered;
    }

    render() {
        return (
            
            <div>
                <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/skrillex/skrillex-bangarang-feat-sirah" width="80%" height="200" scrolling="no" frameborder="no"></iframe>
                <button className="button button1" onClick={this.SoundCloudDisplay}>Load SoundCloud URL</button>  {/* load sound cloud widget, default is a skrillex right now */}   
            <input type="text" className ="loadSoundcloud" id="myText" defaultValue="Enter SoundCloud url here" onChange= {this.handleChangeInputBoxSoundCloud}/>
            
            </div>
        )
    }
}