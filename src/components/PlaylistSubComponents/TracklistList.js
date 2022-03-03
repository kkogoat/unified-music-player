import React, { Component } from 'react';

// import '../css/Tracklist.css';
import { TracklistItem } from './TracklistItem';

export class TracklistList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                {this.props.tracklist.map(tracklistItem => (
                    <TracklistItem key={tracklistItem.id}
                    tracklistItem={tracklistItem}
                    removeTracklistItem={this.props.removeTracklistItem}/>
                ))}
            </div>
        );
    }

}