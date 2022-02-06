const { app, ipcMain, BrowserWindow } = require('electron')

// Close Window
ipcMain.on('quit-app', function (args) {
    var window = BrowserWindow.getFocusedWindow();
    console.log("UMP-Closed");
    window.close();
});

// Minimize Window
ipcMain.on('minimize-app', function (args) {
    var window = BrowserWindow.getFocusedWindow();
    console.log("UMP-Minimized");
    window.minimize();
});

// Maximize Window
ipcMain.on('maximize-app', function (args) {
    var window = BrowserWindow.getFocusedWindow();
    console.log("UMP-Maximized");
    window.setFullScreen(!window.isFullScreen());
});

// Menu App
ipcMain.on('menu-app', function (args) {
    console.log("UMP-Menu");
});