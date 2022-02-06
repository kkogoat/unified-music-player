const { app, ipcMain, BrowserWindow } = require('electron');

// PLAY
ipcMain.on('PLAY', function (event, args) {
    console.log("PLAY");
    console.log(args);
});