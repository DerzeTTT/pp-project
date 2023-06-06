// Electron app handler

// Import modules
const electron = require('electron');
const { app, BrowserWindow } = electron;

const path = require('path');

// Window creation on ready
app.on('ready', () => {

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,

        webPreferences: {
            nodeIntegration: true
        },

        autoHideMenuBar: true,

        icon: './assets/app-assets/images/icon.png'

    });

    mainWindow.loadURL(`file://${path.join(__dirname, '/assets/web-page/index.html')}`);

});

// Quit when all windows are closed
app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit();
    };

});