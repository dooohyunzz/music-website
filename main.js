const { app, BrowserWindow } = require("electron");

const create = () => {
    const window = new BrowserWindow({
        width: 1400,
        height: 950,
    });
    window.loadFile("index.html");
}


app.whenReady().then(()=>{
    create();
})