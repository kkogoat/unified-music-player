const { app, ipcMain, BrowserWindow } = require('electron');

// PLAY
ipcMain.on('PLAY', function (event, args) {
    console.log("PLAY");
    console.log(args);
});

// PAUSE
ipcMain.on('PAUSE', function (event, args) {
    console.log("PAUSE");
    console.log(args);
});

// Select local file -- does not work right now
ipcMain.on('SELECTLOCAL', function (event, args) {
    console.log("SELECT LOCAL");
    console.log(args);
});