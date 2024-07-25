const {app, BrowserWindow, shell, Menu} = require('electron');
const path = require("node:path");
/*const { version, homepage } = require(path.join(__dirname, 'package.json'));
const fs = require("node:fs/promises");
const minify = require("html-minifier").minify;*/

/*
(async () => {
  console.log('Starting file write operation...');

  const aboutContent = `<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'">
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
        <title>About</title>
        <meta content="ahmetcanisik" name="author">
        <link rel="stylesheet" href="${path.join(__dirname, "css", "style.css")}" />
        <style>
          *{top:0;left:0;box-sizing:border-box;}
          body {padding:0;margin:0;min-height: 100vh;display:grid;place-items:center;background-position:center;background-repeat:no-repeat;background-color:#d8c8af;background-image:url("${path.join(__dirname, "assets", "images", "bg.png")}");}
        </style>
    </head>
    
    <body>
      <header class="list-title">Kindom Come Map @${version}</header>
      <main> <a class="link" href="${homepage}" target="_blank">Github</a> </main>
      <footer class="text">by <a class="link" href="https://ahmetcanisik.com/" target="_blank">ahmetcanisik</a></footer>
    </body>
    
    </html>`;

  const minifyAboutContent = minify(aboutContent, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
      trimCustomFragments: true
  });

  try {
      await fs.writeFile(path.join(__dirname, "about.html"), minifyAboutContent, 'utf8');
      console.log('The about.html file has been successfully created and its content has been updated.');
  } catch (err) {
      console.error(`An error occurred while writing the file: ${err.message}`);
  }
})();
*/

class Menus {
  static #len = 0;
  static #aboutWindow = null; // AboutWindow örneğini saklayacak alan

  static AboutWindow() {
    if (Menus.#aboutWindow) {
      // Zaten açık bir pencere varsa, o pencereyi ön planda yap
      Menus.#aboutWindow.focus();
      return;
    }

    Menus.assert();
    Menus.#len += 1;

    Menus.#aboutWindow = new BrowserWindow({
      width: 400,
      height: 200,
      title: 'About',
      icon: path.join(__dirname, "app", "icons", "png", "info.png"),
      modal: true,
      parent: BrowserWindow.getFocusedWindow(),
      resizable: false,
      minimizable: false,
      maximizable: false,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js')
      }
    });

    Menus.#aboutWindow.loadFile(path.join(__dirname, "about.html"));

    Menus.#aboutWindow.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('https:')) {
        shell.openExternal(url);
      }
      return { action: 'deny' };
    });
    
    Menus.#aboutWindow.setMenu(null);

    Menus.#aboutWindow.on('closed', () => {
      Menus.#aboutWindow = null; // Pencere kapatıldığında referansı temizle
      Menus.#len -= 1;
    });
  }

  static close() {
    if (Menus.#aboutWindow) {
      Menus.#aboutWindow.close();
    }
  }

  static assert() {
    if (Menus.#len > 0) {
      throw new Error(
        `Maximum number of windows reached ${Menus.#len}`
      );
    }
  }

  static get length() {
    return Menus.#len;
  }
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, "app", "icons", "png", "256x256.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false
        }
    });
    win.loadFile(path.join(__dirname, "index.html"));

    win.webContents.setWindowOpenHandler(({ url }) => {
      // Only allow https external links
      if (url.startsWith('https:')) {
          shell.openExternal(url)
      }
      return { action: 'deny' }
    });
}

app.whenReady().then(() => {
    createWindow()


    const menu = Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          { role: 'quit' }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { type: 'separator' },
          { role: 'selectall' }
        ]
      },
      {
        label: "View",
        submenu: [
          { role: 'toggleDevTools' }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'About',
            click() {
              Menus.assert();
              Menus.AboutWindow();
            }
          }
        ]
      }
    ]);

    Menu.setApplicationMenu(menu);
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})