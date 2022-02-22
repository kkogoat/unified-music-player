import React, { Component } from 'react';

import './sub_css/PlaylistItem.css';
import { ReactComponent as PlaylistListIcon } from './sub_assets/featured_play_list_white_18dp.svg';

export class PlaylistItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleSetActiveClick = this.handleSetActiveClick.bind(this);
    }

    handleRemoveClick() {
        this.props.removePlaylistItem(this.props.playlistItem.id);
    }

    handleSetActiveClick() {
        this.props.setActiveID(this.props.playlistItem.id);
    }

    render() {
        return(
            <div
            className='playlistItem'
            id={this.props.playlistItem.id === this.props.activeID ? 'isActive' : ''}
            style={{display: 'flex' }} 
            onClick={this.handleSetActiveClick}
            onContextMenu={this.handleRemoveClick}>
                <PlaylistListIcon 
                className='svgIcon-playlist'
                id={this.props.playlistItem.id === this.props.activeID ? '' : 'notActive-svg'}/>

                {this.props.playlistItem.name}
            </div>
        );
    }
}