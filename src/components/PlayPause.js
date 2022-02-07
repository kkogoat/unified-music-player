import React, {Component} from 'react';
import '../css/PlayPause.css';
export class PlayPause extends Component {
   
    //audio is a global variable so pause can use it too
   // this.audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'); //it can call external .mp3 files hosted on websites 
   //var audio = new Audio('/Users/raysh/Desktop/Noisestorm - Survival.mp3'); //if the file is not in the project folder the file path format is like ths
   //function to play mp3 files
  
   constructor(props) {
     super(props);
    //  this.state = {
    //    audio :new Audio('/js/Porter Robinson - Look At The Sky.mp3'), //if the song is in the project folder the file can be called like this
    //  };
    }
    
    //function to play audio saved on computer
     play(){ 
       var audio= new Audio('/js/Porter Robinson - Look At The Sky.mp3');
       console.log("play function successfully reached this line");
       audio.play();
       //this.setState.audio = new Audio();
    //   this.setState({audio:this.audio.play});
       window.api.PlayPause('PLAY', 'Porter Robinson - Look At The Sky.mp3');
    }
    //function to pause 
    pause(){
        audio.pause(); //pauses the code, doesn't run past here when this is uncommented because audio() is only declared locally in play
       console.log("pause function successfully reached this line");
       window.api.PlayPause('PAUSE', 'Porter Robinson - Look At The Sky.mp3'); //i have seen this print out in the console when audio.pause() is uncommented
     }

     selectLocal(){ //this function opens the file explorer but when the mp3 file is selected it is not playing it
      var input = document.createElement('input');
      input.type = 'file';
      var file;
      input.onchange = e => { 
          file = e.target.files[0]; 
      }
      
      input.click();
      console.log("value of file is"+file);
      var audio = new Audio (file.name);
      console.log("value of audio is"+audio);
     audio.play();
      window.api.PlayPause('SELECTLOCAL', 'Porter Robinson - Look At The Sky.mp3');
      //tried the below to also play local mp3  but getting error on the       let {remote} = require("electron"); line 
      // let {remote} = require("electron");
      //   let dialog =remote.dialog;
      //  let mainWindow = remote.getCurrentWindow();
      //  let selectFile = document.getElementById("selectFile");
      //   selectFile.onclick = async () =>{
      //    let file = await dialog.showOpenDialog(mainWindow, {
      //      filters: [
      //        {
      //          name : "Music Files",
      //          extensions: ["mp3", "wav"],
      //        },
      //      ],
      //    });
      //    var audio = new Audio(file.filePaths[0]);
      //    audio.play();
      //  };
      //  window.api.PlayPause('SELECTLOCAL', 'Porter Robinson - Look At The Sky.mp3'); 
     }

     render() { //render buttons 
        return (
            <div>
                <button class="button button1" onClick={this.play}>Play</button>  {/* Buttons to play and pause songs */}
                <button class="button button2" onClick={this.pause}>Pause</button>
                <button class="button button3" onClick={this.selectLocal}>Select Local File and Play</button>
            </div>
            )
        }

}
