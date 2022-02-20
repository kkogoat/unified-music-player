const { ipcMain, BrowserWindow } = require('electron')
const Store = require('electron-store');
const storage = new Store();

// Load Playlists
ipcMain.handle('playlist-load', async function (e, args) {
    const playlist = storage.get(args.key);
    return playlist;
});

// Load ActiveID
ipcMain.handle('playlist-load-activeID', async function (e, args) {
    const activeID = storage.get(args.key);
    return activeID;
});

// Save Playlists
ipcMain.on('playlist-update', function (e, args) {
    console.log('playlist-update');
    if (args.payload) {
        storage.set(args.key, args.payload);
    }
});

// Save ActiveID
ipcMain.on('playlist-update-activeID', function (e, args) {
    console.log('playlist-update-activeID');
    if (args.payload) {
        storage.set(args.key, args.payload);
    }
})