import React, {Component} from 'react';

// CSS
import '../css/MenuBar.css';

// Menu, Minimize, Maximize, Exit
export class MenuBar extends Component {

    // Exit
    quitBtn() {
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

    render() {
        return (
            <div className='MenuBar'>
                {/* Left Dropdown Menu*/}
                <div id="BurgerMenu">
                    UMP
                </div>

                {/* Current Artist-Song */}
                <div id="SongTitle">
                    Artist - Song
                </div>

                {/* Window Controls */}
                <div id='WindowControl'>
                    <button className='WindowControl-button' onClick={this.quitBtn}>Quit</button>
                    <button className='WindowControl-button' onClick={this.minimizeBtn}>Minimize</button>
                    <button className='WindowControl-button' onClick={this.maximizeBtn}>Maximize</button>
                </div>

            </div>
        )
    }

}