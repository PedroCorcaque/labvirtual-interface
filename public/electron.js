const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    window.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) {
        window.webContents.openDevTools({ mode: "detach" });
    }

    var python = require("child_process").spawn("python3", ["backend/api.py"]);
        python.stdout.on("data", (data) => {
            console.log("data: ", data.toString("utf8"));
        });
        python.stderr.on("data", (data) => {
            console.log(`stderr: ${data}`);
        })
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});