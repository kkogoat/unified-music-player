const { app, BrowserWindow, ipcMain } = require('electron')

// Dev vs Production Code Switcher
const isDev = require('electron-is-dev');
const path = require('path')

// Settings
const { getWinSettings, saveWinSettings, getWinPos, saveWinPos } = require('./settings.js');

// Main Electron Window
function createWindow () {

    // Get Previous or Default Window Size
    const win_size = getWinSettings();
    const win_pos = getWinPos();

    const win = new BrowserWindow({
        //Width
        minWidth: 650,
        width: win_size[0],

        //Height
        minHeight: 300,
        height: win_size[1],

        //Position
        x: win_pos[0], y: win_pos[1],

        // Hides default menu bar
        frame: false,

        show: false,

        // Environment
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true
        }
    })

    win.on("resized", () => saveWinSettings(win.getSize()));
    win.on("moved", () => saveWinPos(win.getPosition()));

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    win.webContents.on('did-finish-load', function() {
        win.show();
    });
}

// Render Window when ready
app.on('ready', createWindow);

// Below is for MacOS
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// End of MacOS


// IPC MAIN MENU BAR
require('./js/AppHandler.js');
require('./js/MenuBarHandler.js');
require('./js/PlaylistHandler.js');
require('./js/PlayPauseHandler.js');
require('./js/TracklistHandler.js');
// END IPC MAIN MENU BAR