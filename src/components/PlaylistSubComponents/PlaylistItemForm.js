import React, { Component } from 'react';

// import '../css/Playlist.css';
import { v4 as uuidv4 } from 'uuid';

export class PlaylistItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistItem: {
                id: "",
                name: ""
            }
        };
        this.addPlaylistItem = this.props.addPlaylistItem.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInputChange(e) {
        this.setState({playlistItem: {...this.state.playlistItem, name: e.target.value}});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.playlistItem.name.trim()) {
            this.addPlaylistItem({...this.state.playlistItem, id: uuidv4()});
            this.setState({playlistItem: {...this.state.playlistItem, name: ""}});
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="name"
                type="text" 
                value={this.state.playlistItem.name}
                onChange={this.handleNameInputChange}
                />
                <button type='submit'>submit</button>
            </form>
        );
    }

}