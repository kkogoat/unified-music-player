const { app, ipcMain, BrowserWindow } = require('electron');

// Sound Cloud Load
ipcMain.on('SoundCloudDisplay', function (event, args) {
    console.log("SoundCloud Display");
    console.log(args);
});
// Sound Cloud Load
ipcMain.on('handleChangeInputBoxSoundCloud', function (event, args) {
    console.log("SoundCloud url passed into function");
    console.log(args);
});