import React, { Component } from 'react';

// import '../css/Playlist.css';
import { PlaylistItem } from './PlaylistItem';

export class PlaylistList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <ul>
                {this.props.playlist.map(playlistItem => (
                    <PlaylistItem key={playlistItem.id} playlistItem={playlistItem} removePlaylistItem={this.props.removePlaylistItem}/>
                ))}
            </ul>
        );
    }

}