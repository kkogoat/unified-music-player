import React, {Component} from 'react';
import '../css/PlayPause.css';
export class PlayPause extends Component {
   
    //audio is a global variable so pause can use it too
   // this.audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'); //it can call external .mp3 files hosted on websites 
   //var audio = new Audio('/Users/raysh/Desktop/Noisestorm - Survival.mp3'); //if the file is not in the project folder the file path format is like ths
   //function to play mp3 files
    
   constructor(props) {
     super(props);
     this.audio= new Audio('Porter Robinson - Look At The Sky.mp3'); //if the song is in the project folder the file can be called like this
    }
    //function to play
     play(){
       window.api.PlayPause('PLAY', 'Porter Robinson - Look At The Sky.mp3');
    }
    //function to pause 
    pause(){
    this.audio.pause();
       console.log("pause function successfully reached this line");
     }
     render() {
        return (
            <div>
                <button class="button button1" onClick={this.play}>Play</button>  {/* Buttons to play and pause songs */}
                <button class="button button2" onClick={this.pause}>Pause</button>
            </div>
            )
        }

}
