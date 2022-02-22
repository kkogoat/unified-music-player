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

//Select Local File
ipcMain.on('SELECTLOCAL', function (event, args) {
    console.log("SELECT LOCAL");
    console.log(args);
});