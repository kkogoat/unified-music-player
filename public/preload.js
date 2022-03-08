const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // // Start Example Methods
    // // Invoke Methods
    // testInvoke: (args) => ipcRenderer.invoke('test-invoke', args),
    // // Send Methods
    // testSend: (args) => ipcRenderer.send('test-send', args),
    // // Receive Methods
    // testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }),
    // // End Example Methods

    // App Functionality
    AppSend: (channel, args) => {
        let validChannels = ['app-update-activeSong'];
        if(validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    AppInvoke: (channel, args) => {
        let validChannels = ['app-load-activeSong'];
        if(validChannels.includes(channel))  {
            return ipcRenderer.invoke(channel, args);
        }
    },

    // Menu Bar Functionality
    MenuBar: (channel, args) => {
        let validChannels = ['quit-app', 'minimize-app', 'maximize-app', 'menu-app'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    PlayPause: (channel, args) => {
        let validChannels = ['PLAY', 'PAUSE','SELECTLOCAL'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    SoundCloud: (channel, args) => {
        let validChannels = ['SoundCloudDisplay','handleChangeInputBoxSoundCloud'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    // Playlist Functionality
    PlaylistSend: (channel, args) => {
        let validChannels = ['playlist-update', 'playlist-update-activeID'];
        if(validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    PlaylistInvoke: (channel, args) => {
        let validChannels = ['playlist-load', 'playlist-load-activeID'];
        if(validChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, args);
        }
    },

    // Tracklist Functionality
    TracklistSend: (channel, args) => {
        let validChannels = ['tracklist-update', 'tracklist-delete'];
        if(validChannels.includes(channel)) {
            return ipcRenderer.send(channel, args);
        }
    },

    TracklistInvoke: (channel, args) => {
        let validChannels = ['tracklist-load'];
        if(validChannels.includes(channel))  {
            return ipcRenderer.invoke(channel, args);
        }
    }
});