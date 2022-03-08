const { ipcMain, BrowserWindow } = require('electron')
const Store = require('electron-store');
const storage = new Store();

// Load ActiveSong
ipcMain.handle('app-load-activeSong', async function (e, key) {
    const activeSong = storage.get(key);
    return activeSong;
});

// Save ActiveSong
ipcMain.on('app-update-activeSong', function (e, args) {
    if (args.payload) {
        storage.set(args.key, args.payload);
    }
})