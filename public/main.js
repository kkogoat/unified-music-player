const { app, BrowserWindow, ipcMain } = require('electron')

// Dev vs Production Code Switcher
const isDev = require('electron-is-dev');
const path = require('path')

// Main Electron Window
function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false, // Hides default menu bar
        webPreferences: {
            preload:
                isDev
                    ? path.join(__dirname, './preload.js')
                    : path.join(__dirname, '../build/preload.js'),
            contextIsolation: true
        }
    })

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    )
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
require('./js/MenuBarHandler.js');
// END IPC MAIN MENU BAR