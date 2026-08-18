import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  const MyWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  }); // testando o husky
  MyWindow.loadFile("index.html");
  MyWindow.webContents.openDevTools();
});
