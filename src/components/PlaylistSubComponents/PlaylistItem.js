import React, { Component } from 'react';

// import '../css/Playlist.css';

export class PlaylistItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleRemoveClick() {
        this.props.removePlaylistItem(this.props.playlistItem.id);
    }

    render() {
        return(
            <div style={{display: 'flex' }}>
                <li>{this.props.playlistItem.name}</li>
                <button onClick={this.handleRemoveClick}>X</button>
            </div>
        );
    }
}