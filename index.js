const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 640,
        height: 360
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})