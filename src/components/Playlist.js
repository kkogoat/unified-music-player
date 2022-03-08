import React, { Component } from 'react';

import '../css/Playlist.css';
import { PlaylistItemForm } from './PlaylistSubComponents/PlaylistItemForm';
import { PlaylistList } from './PlaylistSubComponents/PlaylistList';
import { TracklistItemForm } from './PlaylistSubComponents/TracklistItemForm';
import { TracklistList } from './PlaylistSubComponents/TracklistList';

const LOCAL_STORAGE_KEY = 'playlist-list-playlistItems'
const LOCAL_STORAGE_KEY_ACTIVEID = 'playlist-list-activeId'

export class Playlist extends Component {
    constructor(props) {
    
        super(props);
        this.state = {
            playlist: [],
            activeID: 0,
            tracklist: []
        };

        // Playlist Functions
        this.addPlaylistItem = this.addPlaylistItem.bind(this);
        this.removePlaylistItem = this.removePlaylistItem.bind(this);
        this.setActiveID = this.setActiveID.bind(this);

        // Tracklist Functions
        this.addTracklistItem = this.addTracklistItem.bind(this);
        this.removeTracklistItem = this.removeTracklistItem.bind(this);
    }

    // Component Load Procedures
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
            const storageTracklist = JSON.parse(await window.api.TracklistInvoke('tracklist-load', this.state.activeID));
            this.setState({tracklist: storageTracklist});
        }
    }

    // Playlist Update
    async componentDidUpdate(previousProps, previousState) {
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

        var _tracklistArgs = {
            key: this.state.activeID,
            message: "",
            payload: JSON.stringify(this.state.tracklist)
        }


        // Playlist Save
        if(previousState.playlist !== this.state.playlist) {
            window.api.PlaylistSend('playlist-update', _playlistArgs);
        }
        
        // Active ID Save & Load active ID tracklist
        if(previousState.activeID !== this.state.activeID) {
            window.api.PlaylistSend('playlist-update-activeID', _activeIDArgs);
            const storageTracklist = JSON.parse(await window.api.TracklistInvoke('tracklist-load', this.state.activeID));
            this.setState({tracklist: storageTracklist});
        }
        
        // Tracklist Save
        if(previousState.tracklist !== this.state.tracklist) {
            if(previousState.activeID === this.state.activeID) {
                window.api.TracklistSend('tracklist-update', _tracklistArgs);
            }
        }
    }

    setActiveID(id) {
        this.setState({activeID: id}, function () {
            console.log(this.state.activeID);
        });
    }

    // Playlist Functions
    addPlaylistItem(playlistItem) {
        this.setState({playlist: [playlistItem, ...this.state.playlist]});
    }

    removePlaylistItem(id) {
        this.setState({playlist: this.state.playlist.filter(playlistItem => playlistItem.id !== id)});

        // Delete Associated Tracklist
        window.api.TracklistSend('tracklist-delete', id);

        if(id === this.state.activeID) {
            this.setState({tracklist: []});
        }
    }

    // Tracklist Functions
    addTracklistItem(tracklistItem) {
        if(this.state.tracklist.some(tlItem => tlItem.id === tracklistItem.id)) {
            console.log("Song Already Exists!")
            return;
        }
        this.setState({tracklist: [tracklistItem, ...this.state.tracklist]});
    }

    removeTracklistItem(id) {
        this.setState({tracklist: this.state.tracklist.filter(tracklistItem => tracklistItem.id !== id)});
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
                    <TracklistItemForm addTracklistItem={this.addTracklistItem} />
                    <TracklistList tracklist={this.state.tracklist}
                    removeTracklistItem={this.removeTracklistItem}
                    changeActiveSong={this.props.changeActiveSong}/>
                </div>
            </div>
        );
    }

}