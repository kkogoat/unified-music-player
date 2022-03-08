import React, { Component } from 'react';

// CSS
import './css/App.css';

// Components
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { MenuBar } from './components/MenuBar';
import { NavBar } from './components/NavBar';
import { Playlist } from './components/Playlist';
import { Explore } from './components/Explore';

import {PlayPause} from './components/PlayPause';
import{SoundCloud} from  './components/SoundCloud';

const LOCAL_STORAGE_KEY_ACTIVESONG = 'app-state-activesong';

// Main Window that holds all other components
export class App extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            activeSong: "",
        }

        // Song Functions
        this.changeActiveSong = this.changeActiveSong.bind(this);
    }

    async componentDidMount() {
        const storageActiveSong = await window.api.AppInvoke('app-load-activeSong', LOCAL_STORAGE_KEY_ACTIVESONG);
        if(storageActiveSong) {
            this.setState({activeSong: storageActiveSong});
        }
    }

    componentDidUpdate(previousProps, previousState) {
        var _activeSongArgs = {
            key: LOCAL_STORAGE_KEY_ACTIVESONG,
            message: "",
            payload: this.state.activeSong
        }

        if(previousState.activeSong !== this.state.activeSong) {
            window.api.AppSend('app-update-activeSong', _activeSongArgs);
        }
    }

    changeActiveSong(song) {
        this.setState({activeSong: song});
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    {/* THIS IS HOW TO COMMENT */}
                    <div className='Header'>
                        <MenuBar 
                        activeSong = {this.state.activeSong}
                        />
                        <NavBar />
                    </div>
                    <div className='Content'>
                        <Switch>
                            <Route exact path="/">
                                <Playlist 
                                changeActiveSong={this.changeActiveSong}
                                />
                            </Route>
                            <Route exact path="/explore"><Explore /></Route>
                        </Switch>
                    </div>
                    <div className='Footer'>
                    <PlayPause />
                    <SoundCloud/>
                    </div>
                </div>
            </Router>
        );
    }
}

