import React, {Component} from 'react';

// CSS
//import '../css/Settings.css';

// Menu, Minimize, Maximize, Exit
export class Settings extends Component {

    // Exit
    /*quitBtn() {
        window.api.MenuBar('quit-app');
    }

    // Minimize
    minimizeBtn() {
        window.api.MenuBar('minimize-app');
    }

    // Maximize
    maximizeBtn() {
        window.api.MenuBar('maximize-app');
    }

    // Menu
    menuBtn () {
        window.api.MenuBar('menu-app');
    }*/

    render() {
        return (
            <div className='MenuBar'>
                {/* Left Dropdown Menu*/}
                <div id="BurgerMenu">
                    <button className='WindowControl-button burger' onClick={this.menuBtn}>UMP</button>
                </div>

                {/* Current Artist-Song */}
                <div id="SongTitle">
                    Artist - Song
                </div>

                {/* Window Controls */}
                <div id='WindowControl'>
                    <button className='WindowControl-button mini' onClick={this.minimizeBtn}></button>
                    <button className='WindowControl-button max' onClick={this.maximizeBtn}></button>
                    <button className='WindowControl-button quit' onClick={this.quitBtn}></button>
                </div>

            </div>
        )
    }

}