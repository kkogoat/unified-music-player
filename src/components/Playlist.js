import React, { Component } from 'react';

// import '../css/Playlist.css';
import { PlaylistItemForm } from './PlaylistSubComponents/PlaylistItemForm';
import { PlaylistList } from './PlaylistSubComponents/PlaylistList';

const LOCAL_STORAGE_KEY = 'playlist-list-playlistItems'

export class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
        };
        this.addPlaylistItem = this.addPlaylistItem.bind(this);
        this.removePlaylistItem = this.removePlaylistItem.bind(this);
    }

    // Playlist Load
    async componentDidMount() {
        var _playlistArgs = {
            key: LOCAL_STORAGE_KEY,
            message: "",
            payload: ""
        }

        const storagePlaylist = JSON.parse(await window.api.PlaylistInvoke('playlist-load', _playlistArgs));
        if(storagePlaylist) {
            this.setState({playlist: storagePlaylist});
        }
    }

    // Playlist Update
    componentDidUpdate() {
        var _playlistArgs = {
            key: LOCAL_STORAGE_KEY,
            message: "",
            payload: JSON.stringify(this.state.playlist)
        }

        window.api.PlaylistSend('playlist-update', _playlistArgs);
    }

    addPlaylistItem(playlistItem) {
        this.setState({playlist: [playlistItem, ...this.state.playlist]});
    }

    removePlaylistItem(id) {
        this.setState({playlist: this.state.playlist.filter(playlistItem => playlistItem.id !== id)});
    }

    render() {
        return(
            <div>
                <p>Hello From Playlist</p>
                <PlaylistItemForm addPlaylistItem={this.addPlaylistItem} />
                <PlaylistList playlist={this.state.playlist} removePlaylistItem={this.removePlaylistItem}/>
            </div>
        );
    }

}