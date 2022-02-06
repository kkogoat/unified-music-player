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

    // Menu Bar Functionality
    MenuBar: (channel, args) => {
        let validChannels = ['quit-app', 'minimize-app', 'maximize-app', 'menu-app'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },

    PlayPause: (channel, args) => {
        let validChannels = ['PLAY'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    }
});