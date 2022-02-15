const { ipcMain, BrowserWindow } = require('electron')
const Store = require('electron-store');
const storage = new Store();

// Load Playlists
ipcMain.handle('playlist-load', async function (e, args) {
    const playlist = storage.get(args.key);
    return playlist;
});

// Save Playlists
ipcMain.on('playlist-update', function (e, args) {
    console.log('playlist-update');
    if (args.payload) {
        storage.set(args.key, args.payload);
    }
});