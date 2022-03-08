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
    if(window.isMaximized()) {
        console.log("UMP-UNMaximized");
        window.unmaximize();
    } else {
        console.log("UMP-Maximized");
        window.maximize();
    }
});

// Menu App
ipcMain.on('menu-app', function (args) {
    console.log("UMP-MenuSettings");
    subwindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800, height: 600
    })
    console.log("after creating subwindow...")
    subwindow.loadFile('./public/loadsettings.html')

});