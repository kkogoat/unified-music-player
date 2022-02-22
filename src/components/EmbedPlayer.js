import React, { Component } from 'react';

export class EmbedPlayer extends Component {
    render() {
        const { url } = this.props
        return (
            <iframe
                width="640"
                height="390"
                src={url}
                allow="autoplay; encrypted-media"
                frameBorder="0"
            ></iframe>
            // https://www.electronjs.org/docs/latest/tutorial/web-embeds
            // To enable webview tag, set "webviewTag: true" in main.js
            // The <webview> element has many custom methods and events
            // , similar to webContents, that provide you with greater control over the content.
            // However, there are some videos that can't be played through webview, e.g. rickroll
            // <webview src={url} style={{ width: '640px', height: '390px' }}></webview>
        )
    }

}