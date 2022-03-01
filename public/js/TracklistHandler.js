const { ipcMain, BrowserWindow } = require('electron')
const Store = require('electron-store');
const storage = new Store();

// Delete Tracklist
ipcMain.on('tracklist-delete', function (e, arg) {
    console.log('tracklist-delete');
    storage.delete(arg);
});

// Save Tracklist
ipcMain.on('tracklist-update', function (e, args) {
    console.log('tracklist-update');
    if (args.payload) {
        storage.set(args.key, args.payload);
    }
});

// Load Tracklist
ipcMain.handle('tracklist-load', async function (e, arg) {
    console.log('tracklist-load');
    const default_tracklist = '[]';
    const tracklist = storage.get(arg);
    if(tracklist) {
        return tracklist;
    }
    else {
        storage.set(arg, default_tracklist);
        return default_tracklist;
    }
});