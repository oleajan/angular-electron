const { app, BrowserWindow } = require('electron');

function createWindow() {
  win = new BrowserWindow({
    width: 1024, 
    height: 768,
  });
  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow()
})