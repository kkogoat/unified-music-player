import React, { Component } from 'react';

import './sub_css/TracklistItem.css';

export class TracklistItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleRemoveClick() {
        this.props.removeTracklistItem(this.props.tracklistItem.id);
    }

    handleClick(e) {
        switch (e.detail) {
            case 2:
                this.props.changeActiveSong(this.props.tracklistItem.id);
                break;
            default:
                return;
        }
    }

    render() {
        return(
            <div
            className='tracklistItem'
            id={this.props.tracklistItem.id === this.props.activeSong ? 'isActiveTrack' : ''}
            onContextMenu={this.handleRemoveClick}
            onClick={this.handleClick}>
                {this.props.tracklistItem.id}
            </div>
        );
    }
}