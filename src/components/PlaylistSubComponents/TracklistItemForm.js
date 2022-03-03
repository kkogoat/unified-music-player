import React, { Component } from 'react';

export class TracklistItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracklistItem: {
                id: ""
            }
        };
        this.addTracklistItem = this.props.addTracklistItem.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInputChange(e) {
        this.setState({tracklistItem: {...this.state.tracklistItem, id: e.target.value}});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.tracklistItem.id.trim()) {
            this.addTracklistItem({...this.state.tracklistItem});
            this.setState({tracklistItem: {...this.state.tracklistItem, id: ""}});
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="name"
                type="text"
                value={this.state.tracklistItem.id}
                onChange={this.handleNameInputChange}
                />
                <button type='submit'>submit</button>
            </form>
        );
    }
}