import React, { Component } from 'react';

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
            onContextMenu={this.handleRemoveClick}
            onClick={this.handleClick}>
                {this.props.tracklistItem.id}
            </div>
        );
    }
}