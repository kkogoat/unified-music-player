import React, { Component } from 'react';

export class TracklistItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleRemoveClick() {
        this.props.removeTracklistItem(this.props.tracklistItem.id);
    }

    render() {
        return(
            <div
            onContextMenu={this.handleRemoveClick}>
                {this.props.tracklistItem.id}
            </div>
        );
    }
}