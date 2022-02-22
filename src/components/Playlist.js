import React, { Component } from 'react';

import '../css/Playlist.css';
import { PlaylistItemForm } from './PlaylistSubComponents/PlaylistItemForm';
import { PlaylistList } from './PlaylistSubComponents/PlaylistList';
import { TracklistList } from './PlaylistSubComponents/TracklistList';

const LOCAL_STORAGE_KEY = 'playlist-list-playlistItems'
const LOCAL_STORAGE_KEY_ACTIVEID = 'playlist-list-activeId'

export class Playlist extends Component {
    constructor(props) {
    
        super(props);
        this.state = {
            playlist: [],
            activeID: 0
        };
        this.addPlaylistItem = this.addPlaylistItem.bind(this);
        this.removePlaylistItem = this.removePlaylistItem.bind(this);
        this.setActiveID = this.setActiveID.bind(this);
    }

    // Playlist Load
    async componentDidMount() {
        var _playlistArgs = {
            key: LOCAL_STORAGE_KEY,
            message: "",
            payload: ""
        }

        var _activeIDArgs = {
            key: LOCAL_STORAGE_KEY_ACTIVEID,
            message: "",
            payload: ""
        }

        const storagePlaylist = JSON.parse(await window.api.PlaylistInvoke('playlist-load', _playlistArgs));
        const storageActiveID = await window.api.PlaylistInvoke('playlist-load-activeID', _activeIDArgs);
        if(storagePlaylist) {
            this.setState({playlist: storagePlaylist});
        }

        if(storageActiveID) {
            this.setState({activeID: storageActiveID});
        }
    }

    // Playlist Update
    componentDidUpdate(previousProps, previousState) {
        var _playlistArgs = {
            key: LOCAL_STORAGE_KEY,
            message: "",
            payload: JSON.stringify(this.state.playlist)
        }

        var _activeIDArgs = {
            key: LOCAL_STORAGE_KEY_ACTIVEID,
            message: "",
            payload: this.state.activeID
        }

        if(previousState.playlist !== this.state.playlist) {
            window.api.PlaylistSend('playlist-update', _playlistArgs);
        }

        if(previousState.activeID !== this.state.activeID) {
            window.api.PlaylistSend('playlist-update-activeID', _activeIDArgs);
        }
    }

    addPlaylistItem(playlistItem) {
        this.setState({playlist: [playlistItem, ...this.state.playlist]});
    }

    removePlaylistItem(id) {
        this.setState({playlist: this.state.playlist.filter(playlistItem => playlistItem.id !== id)});
    }

    setActiveID(id) {
        this.setState({activeID: id}, function () {
            console.log(this.state.activeID);
        });
    }

    render() {
        return(
            <div className='playlist'>
                <div className='playlist-list'>
                    <p>Hello From Playlist</p>
                    <PlaylistItemForm addPlaylistItem={this.addPlaylistItem} />
                    <PlaylistList playlist={this.state.playlist} 
                    removePlaylistItem={this.removePlaylistItem}
                    setActiveID={this.setActiveID}
                    activeID={this.state.activeID}/>
                </div>
                <div className='playlist-tracklist'>
                    <TracklistList />
                </div>
            </div>
        );
    }

}